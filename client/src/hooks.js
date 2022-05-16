import * as cookie from "cookie";
import finder from "./_db.js";

export const handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get("cookie") || "");
  event.locals.userid = cookies["userid"] || null;

  try {
    if (cookies.userid) {
      // console.log(cookies.userid);
      const userid = cookies.userid;
      const user = await finder(userid);
      // console.log(user);
      if (user.username) {
        // event.locals.userid = user._id;
        event.locals.username = user.username;
        // event.locals.wallet = user.wallet;
        // console.log(event.locals.user);
      } else {
        var response = await resolve(event);
        response.headers.set(
          "set-cookie",
          cookie.serialize("userid", "", {
            path: "/",
            expires: new Date(0),
          })
        );
        event.locals.user = null;
      }
      // var response = await resolve(event);
    }
  } catch (error) {
    console.log(error);
  }

  var response = await resolve(event);

  // event.locals.userid = cookies['userid'] || uuid();

  // set cookie when user logged in.

  return response;
};

export function getSession(event) {
  // console.log(event.locals);
  return event.locals.userid
    ? {
        user: {
          // _id: event.locals.userid,
          username: event.locals.username,
          // wallet: event.locals.wallet
          wallet: []
        },
      }
    : {};
}
