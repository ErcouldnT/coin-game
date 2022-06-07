import { db } from "$lib/db";
import User from "$lib/models/User";

export const get = async ({ locals, params, request }) => {
  const user = await User.findById(params.userid);

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
      user
    },
  };
};
