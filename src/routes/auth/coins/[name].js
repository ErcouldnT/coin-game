import { CoinGeckoClient } from "$lib/modules";

export const get = async ({ locals, params, request }) => {
  const coin = await CoinGeckoClient.coins.fetch(params.name.toLowerCase().trim(), {
    tickers: false,
    market_data: true,
    community_data: false,
    developer_data: false,
    localization: false,
    sparkline: false
  });

  return {
    status: 200,
    body: {
      id: coin.data.id,
      symbol: coin.data.symbol,
      name: coin.data.name,
      market: coin.data.market_data.current_price
    },
  };
};
