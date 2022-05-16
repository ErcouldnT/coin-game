import { c as create_ssr_component, e as escape } from "../../chunks/index-1259f1f6.js";
async function load({
  session
}) {
  if (!session.user) {
    return {
      status: 302,
      redirect: "/"
    };
  }
  return {
    props: {
      user: session.user
    }
  };
}
const Signout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {
    user
  } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `${$$result.head += `${$$result.title = `<title>\xC7\u0131k\u0131\u015F</title>`, ""}`, ""}



<section class="${"text-center m-5"}"><h1 class="${"m-5"}">\xC7\u0131k\u0131\u015F yapmak istedi\u011Fine emin misin, ${escape(user.username)}?</h1>
  <button class="${"bg-blue-500 p-4 text-white text-2xl rounded-full"}">\xC7iki\u015F\u015F\u015F yapiyirim
  </button></section>`;
});
export { Signout as default, load };
