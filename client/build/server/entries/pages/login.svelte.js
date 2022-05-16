import { c as create_ssr_component, a as add_attribute } from "../../chunks/index-1259f1f6.js";
async function load({ session }) {
  console.log(session);
  if (session.user) {
    return { status: 302, redirect: "/" };
  }
  return { props: { user: session.user } };
}
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let password = "";
  return `${$$result.head += `${$$result.title = `<title>Giri\u015F yap</title>`, ""}`, ""}



<section><h1 class="${"p-10"}">G\u0130R\u0130\u015E</h1>
  ${``}
  <form class="${"flex flex-col p-10 gap-1 items-center"}" action="${""}">Kullan\u0131c\u0131 ad\u0131
    <input class="${"p-2 rounded-xl"}" type="${"text"}" autofocus${add_attribute("value", username, 0)}>
    \u015Eifre
    <input class="${"p-2 rounded-xl"}" type="${"password"}"${add_attribute("value", password, 0)}>
    <button class="${"bg-orange-500 text-white p-2 rounded-xl w-20"}">Tamam</button></form></section>`;
});
export { Login as default, load };
