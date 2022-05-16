import express from 'express';
import CoinGecko from 'coingecko-api';

import User from '../models/User.js';

const router = express.Router();
const CoinGeckoClient = new CoinGecko();

// only in development
const cookieHeaders = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.header('Origin'));
  res.header("Access-Control-Allow-Credentials", true);
  next();
};

// only in development
const cookieHeadersPOST = (req, res, next) => {
  // res.header("Access-Control-Allow-Origin", req.header('Origin'));
  // res.header("Access-Control-Allow-Credentials", true);
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Credentials", "true");
  // res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT");
  // res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
};

router.post('/signup', async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({
      success: true,
      user
    });
  } catch (error) {
    next(error);
  };
});

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne(req.body);
    if (!user) throw new Error("User not found!");
    res.cookie('userid', user._id, { 
      path: '/',
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 7  // one week
    }).json({
      success: true,
      user
    });
  } catch (error) {
    next(error);
  };
});

router.get('/wallet', cookieHeaders, async (req, res, next) => {
  try {
    const userid = await req.cookies.userid;
    // console.log(await req.cookies);
    const user = await User.findById(userid);
    res.json({
      success: true,
      wallet: user.wallet
    });
  } catch (error) {
    error.message = "User not found!";
    next(error);
  };
});

const currencyToCoin = async (currency, coinSymbol) => {
  const coin = await CoinGeckoClient.coins.fetch(coinSymbol.toLowerCase(), {
    tickers: false,
    market_data: true,
    community_data: false,
    developer_data: false,
    localization: false,
    sparkline: false
  });

  const coin_info = {
    id: coin.data.id,
    symbol: coin.data.symbol,
    name: coin.data.name,
    market: coin.data.market_data.current_price
  };

  return coin_info.market[currency.toLowerCase()];
};

const coinToCoin = async (firstCoinID, secCoinID) => {
  const data = await CoinGeckoClient.simple.price({
    ids: [firstCoinID, secCoinID],
    vs_currencies: ['usd'],
  });

  const result = data.data;
  // console.log(result);

  // const fromThisCoin = 'bitcoin';
  // const thisAmount = 1;
  // const toThisCoin = 'ethereum';

  return result[firstCoinID].usd / result[secCoinID].usd;
  // console.log("Exchange value: " + exchangeRate);
  // const toAmount = thisAmount * exchangeRate;
  // console.log(thisAmount + " " + fromThisCoin + " = " + toAmount + " " +toThisCoin);
};

router.post('/exchange', cookieHeadersPOST, async (req, res, next) => {
  try {
    const userid = await req.cookies.userid;
    const user = await User.findById(userid);
    if (!user) throw new Error('User not found');

    const body = req.body;
    body.fromThisCoin = body.fromThisCoin.trim().toLowerCase();
    body.toThisCoin = body.toThisCoin.trim().toLowerCase();

    // todo - user wallet validation here
    const walletFilter = user.wallet.filter(coin => {
      return coin.name.toLowerCase() === body.fromThisCoin && coin.amount >= body.thisAmount;
    });
    
    if (walletFilter.length === 0) throw new Error('Not enough wallet');

    let exchange;
    const isFastEx = await currencyToCoin(body.fromThisCoin, body.toThisCoin);
    if (isFastEx) {
      exchange = isFastEx;
    } else {
      exchange = await coinToCoin(body.toThisCoin, body.fromThisCoin);
    };

    const equals_to = Number((body.thisAmount / exchange).toFixed(4));
    if (!equals_to) {
      throw new Error('Exchange is not possible');
    };

    // saving to db
    // const coinInWallet = await User.findById(walletFilter[0]._id);
    let newCoin = true;
    for (let i = 0; i < user.wallet.length; i++) {
      const coin = user.wallet[i];
      if (body.fromThisCoin === coin.name.toLowerCase()) {
        coin.amount = Number((coin.amount - body.thisAmount).toFixed(4));
        // todo - if coin.amount === 0 then remove this coin from wallet.
      };
      if (body.toThisCoin === coin.name.toLowerCase()) {
        coin.amount = Number((coin.amount + equals_to).toFixed(4));
        newCoin = false;
      };
    };

    if (newCoin) {
      user.wallet.push({
        name: body.toThisCoin.toLowerCase().trim(),
        amount: equals_to
      });
    };

    await user.save();

    res.json({
      success: true,
      from: body.fromThisCoin,
      amount: body.thisAmount,
      to: body.toThisCoin,
      equals_to,
      wallet: user.wallet
    });
  } catch (error) {
    next(error);
  };
});

let coinsCache = {};
router.get('/coins', async (req, res, next) => {
  try {
    // 1 hour cache
    if (coinsCache.date > Date.now() - 1000 * 60 * 60 * 1) {
      return res.json(coinsCache.coins);
    };
    const coins = await CoinGeckoClient.coins.list();
    res.json(coins.data);
    coinsCache = {
      coins: coins.data,
      date: Date.now()
    };
  } catch (error) {
    next(error);
  };
});

router.get('/coin/:name', async (req, res, next) => {
  try {
    const coin = await CoinGeckoClient.coins.fetch(req.params.name.toLowerCase().trim(), {
      tickers: false,
      market_data: true,
      community_data: false,
      developer_data: false,
      localization: false,
      sparkline: false
    });
    res.json({
      id: coin.data.id,
      symbol: coin.data.symbol,
      name: coin.data.name,
      market: coin.data.market_data.current_price
    });
  } catch (error) {
    next(error);
  };
});

router.get('/currencies', async (req, res, next) => {
  try {
    const currencies = await CoinGeckoClient.simple.supportedVsCurrencies();
    res.json(currencies.data);
  } catch (error) {
    next(error);
  };
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({
      success: true,
      user
    });
  } catch (error) {
    error.message = "User not found!";
    next(error);
  };
});

export default router;
