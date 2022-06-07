import * as cookie from "cookie";
import { db } from "$lib/db";
import User from "$lib/models/User";

export const post = async ({ locals, params, request }) => {
  const body = await request.json();

  const user = await User.findOne({ user: body.user });

  if (!user) {
    return {
      status: 401,
      body: {
        message: "Incorrect email or password",
      },
    };
  };

  if (user.password !== body.password) {
    return {
      status: 401,
      body: {
        message: "Unauthorized",
      },
    };
  };

  const headers = {
    "Set-Cookie": cookie.serialize("userid", user._id, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 1 week
      sameSite: "strict",
      path: "/",
      // secure: true
    }),
  };

  return {
    status: 200,
    headers,
    body: {
      message: "Success",
    },
  };
};
