import { c as create_ssr_component, a as add_attribute } from "../../chunks/index-1259f1f6.js";
async function load({ session }) {
  if (session.user) {
    return { status: 302, redirect: "/" };
  }
  return { props: { user: session.user } };
}
const Signup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let password = "";
  return `${$$result.head += `${$$result.title = `<title>Kay\u0131t ol</title>`, ""}`, ""}



<section><h1 class="${"p-10"}">KAYIT</h1>
  ${``}
  <form class="${"flex flex-col p-10 gap-1 items-center"}" action="${""}">Kullan\u0131c\u0131 ad\u0131
    <input class="${"p-2 rounded-xl"}" type="${"text"}" autofocus${add_attribute("value", username, 0)}>
    \u015Eifre
    <input class="${"p-2 rounded-xl"}" type="${"password"}"${add_attribute("value", password, 0)}>
    Tekrar
    <input class="${"p-2 rounded-xl"}" type="${"password"}"${add_attribute("value", password, 0)}>
    <button class="${"bg-orange-500 text-white p-2 rounded-xl w-20"}">Tamam</button></form></section>`;
});
export { Signup as default, load };
