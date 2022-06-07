import { db } from "$lib/db";
import User from "$lib/models/User";
import { currencyToCoin, coinToCoin } from "$lib/modules";

export const post = async ({ locals, params, request }) => {
  // locals.userid comes from src/hooks.js
  const body = await request.json();
  const userid = locals.userid;
  const user = await User.findById(userid);

  if (!user) {
    return {
      status: 404,
      body: {
        message: "User not found",
      },
    };
  }

  body.fromThisCoin = body.fromThisCoin.trim().toLowerCase();
  body.toThisCoin = body.toThisCoin.trim().toLowerCase();

  // todo - user wallet validation here
  const walletFilter = user.wallet.filter((coin) => {
    return (
      coin.name.toLowerCase() === body.fromThisCoin &&
      coin.amount >= body.thisAmount
    );
  });

  if (walletFilter.length === 0) {
    return {
      status: 404,
      body: {
        message: "Not enough wallet",
      },
    };
  }

  let exchange;
  const isFastEx = await currencyToCoin(body.fromThisCoin, body.toThisCoin);
  if (isFastEx) {
    exchange = isFastEx;
  } else {
    exchange = await coinToCoin(body.toThisCoin, body.fromThisCoin);
  }

  const equals_to = Number((body.thisAmount / exchange).toFixed(4));
  if (!equals_to) {
    return {
      status: 404,
      body: {
        message: "Exchange is not possible",
      },
    };
  }

  // saving to db
  // const coinInWallet = await User.findById(walletFilter[0]._id);
  let newCoin = true;
  for (let i = 0; i < user.wallet.length; i++) {
    const coin = user.wallet[i];
    if (body.fromThisCoin === coin.name.toLowerCase()) {
      coin.amount = Number((coin.amount - body.thisAmount).toFixed(4));
      // todo - if coin.amount === 0 then remove this coin from wallet.
    }
    if (body.toThisCoin === coin.name.toLowerCase()) {
      coin.amount = Number((coin.amount + equals_to).toFixed(4));
      newCoin = false;
    }
  }

  if (newCoin) {
    user.wallet.push({
      name: body.toThisCoin.toLowerCase().trim(),
      amount: equals_to,
    });
  }

  await user.save();

  return {
    status: 200,
    body: {
      success: true,
      from: body.fromThisCoin,
      amount: body.thisAmount,
      to: body.toThisCoin,
      equals_to,
      wallet: user.wallet,
    },
  };
};
