import * as cookie from "cookie";
const post = async ({
  request
}) => {
  const URL = "/api/v1/user/login";
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: request.body
  });
  if (res.status === 200) {
    const data = await res.json();
    const headers = {
      "Set-Cookie": cookie.serialize("userid", data.user._id, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "strict",
        path: "/",
        secure: process.env.NODE_ENV === "production"
      })
    };
    return {
      status: 200,
      headers,
      body: {
        success: true,
        message: "Success"
      }
    };
  }
  return {
    status: 401,
    body: {
      success: false,
      message: "Incorrect username or password"
    }
  };
};
export { post };
