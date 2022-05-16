import * as cookie from "cookie";
const get = async ({
  request
}) => {
  const headers = {
    "Set-Cookie": cookie.serialize("userid", "", {
      path: "/",
      expires: new Date(0)
    })
  };
  return {
    status: 302,
    headers,
    body: {
      success: true,
      message: "Success"
    }
  };
};
export { get };
