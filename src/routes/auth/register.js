import * as cookie from "cookie";
// import { db } from "$lib/db";
import User from "$lib/models/User";

export const post = async ({ locals, params, request }) => {
  const body = await request.json();

  const user = await User.findOne({
    username: body.username,
  });

  if (user) {
    return {
      status: 409,
      body: {
        message: "User with that email already exists",
      },
    };
  }

  const newUser = await new User(body);
  await newUser.save();

  const headers = {
    "Set-Cookie": cookie.serialize("userid", newUser._id, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
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
