import CoinGecko from "coingecko-api";
export const CoinGeckoClient = new CoinGecko();

export const currencyToCoin = async (currency, coinId) => {
  // console.log(currency);
  // console.log(coinSymbol);
  const coin = await CoinGeckoClient.coins.fetch(coinId.toLowerCase(), {
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

export const coinToCoin = async (firstCoinID, secCoinID) => {
  // console.log(firstCoinID);
  // console.log(secCoinID);
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

// convert all coin values to usd
export const totalValueCalculator = async (wallet) => {
  let total = 0;
  for (let i = 0; i < wallet.length; i++) {
    const coin = wallet[i];
    if (!coin.isCurrency) {
      total = total + await currencyToCoin("usd", coin.name) * coin.amount;
    };
    if (coin.name?.toLowerCase() === "usd") {
      total = total + coin.amount
    };
  };
  return total;
};
