import { CoinGeckoClient } from "$lib/modules";

var coinsCache = {};

export const get = async ({ locals, params, request }) => {
  // 1 hour cache
  if (coinsCache.date > Date.now() - 1000 * 60 * 60 * 1) {
    return {
      status: 200,
      body: coinsCache.coins,
    };
  };

  const coins = await CoinGeckoClient.coins.list();

  coinsCache = {
    coins: coins.data,
    date: Date.now()
  };

  return {
    status: 200,
    body: coins.data,
  };
};
