import { totalValueCalculator } from "$lib/modules";

export const post = async ({ locals, params, request }) => {
  const wallet = await request.json();
  // console.log(wallet);
  const totalValue = await totalValueCalculator(wallet);

  return {
    status: 200,
    body: {
      success: true,
      total: totalValue
    },
  };
};
