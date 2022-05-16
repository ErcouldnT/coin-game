import * as cookie from "cookie";
import "dotenv/config";
import mongoose from "mongoose";
const {
  Schema
} = mongoose;
const coinSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true
});
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  wallet: {
    type: [coinSchema],
    default: [{
      amount: 1e3,
      name: "USD"
    }]
  }
}, {
  timestamps: true
});
var User = mongoose.model("User", userSchema);
mongoose.connect(process.env.MONGO_URI, (error) => {
});
const finder = async (userid) => {
  try {
    const user = await User.findById(userid);
    return user;
  } catch (error) {
  }
};
const handle = async ({
  event,
  resolve
}) => {
  const cookies = cookie.parse(event.request.headers.get("cookie") || "");
  event.locals.userid = cookies["userid"] || null;
  try {
    if (cookies.userid) {
      const userid = cookies.userid;
      const user = await finder(userid);
      if (user.username) {
        event.locals.username = user.username;
      } else {
        var response = await resolve(event);
        response.headers.set("set-cookie", cookie.serialize("userid", "", {
          path: "/",
          expires: new Date(0)
        }));
        event.locals.user = null;
      }
    }
  } catch (error) {
  }
  var response = await resolve(event);
  return response;
};
function getSession(event) {
  return event.locals.userid ? {
    user: {
      username: event.locals.username,
      wallet: []
    }
  } : {};
}
export { getSession, handle };
