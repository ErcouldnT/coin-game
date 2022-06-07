import { CoinGeckoClient } from "$lib/modules";

export const get = async ({ locals, params, request }) => {
  const currencies = await CoinGeckoClient.simple.supportedVsCurrencies();

  return {
    status: 200,
    body: currencies.data,
  };
};
