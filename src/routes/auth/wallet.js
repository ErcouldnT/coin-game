import { db } from "$lib/db";
import User from "$lib/models/User";

export const get = async ({ locals, params, request }) => {
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

  return {
    status: 200,
    body: {
      success: true,
      wallet: user.wallet
    },
  };
};
