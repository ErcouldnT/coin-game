import * as cookie from "cookie";

export const post = async ({ request }) => {
  const URL = '/api/v1/user/login';
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: request.body
  });

  if (res.status === 200) {
    const data = await res.json();
    try {
      const headers = {
        "Set-Cookie": cookie.serialize("userid", data.user._id, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7,
          // sameSite: "strict",
          path: "/",
          // secure: true
        }),
        // location: `/wallet`
      };

      return {
        status: 200,
        headers,
        body: {
          success: true,
          message: 'Success'
        },
      };
    } catch (error) {
      console.log(error.message);
    };
  };

  return {
    status: 401,
    body: {
      success: false,
      message: 'Incorrect username or password'
    }
  };
};

