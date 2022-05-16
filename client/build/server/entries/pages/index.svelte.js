import { c as create_ssr_component, e as escape } from "../../chunks/index-1259f1f6.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.s-Uap-jPRb-uiE.s-Uap-jPRb-uiE{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.s-Uap-jPRb-uiE.s-Uap-jPRb-uiE{width:100%}.welcome.s-Uap-jPRb-uiE.s-Uap-jPRb-uiE{position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}.welcome.s-Uap-jPRb-uiE img.s-Uap-jPRb-uiE{position:absolute;width:100%;height:100%;top:0;display:block}.s-Uap-jPRb-uiE.s-Uap-jPRb-uiE{}",
  map: null
};
async function load({
  session
}) {
  return {
    props: {
      user: session.user
    }
  };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {
    user
  } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Coin Game!</title>`, ""}<meta name="${"description"}" content="${"Coin game app"}" class="${"s-Uap-jPRb-uiE"}" data-svelte="svelte-ptt59h">`, ""}

<section class="${"s-Uap-jPRb-uiE"}"><h1 class="${"mb-4 s-Uap-jPRb-uiE"}"><div class="${"welcome s-Uap-jPRb-uiE"}"><picture class="${"s-Uap-jPRb-uiE"}"><source srcset="${"svelte-welcome.webp"}" type="${"image/webp"}" class="${"s-Uap-jPRb-uiE"}">
				<img src="${"svelte-welcome.png"}" alt="${"Welcome"}" class="${"s-Uap-jPRb-uiE"}"></picture></div>

		${user ? `Merhaba<br class="${"s-Uap-jPRb-uiE"}">${escape(user.username.toUpperCase())}!
			<p class="${"text-xl mt-4 s-Uap-jPRb-uiE"}">C\xFCzdana gitmek i\xE7in <a href="${"/wallet"}" class="${"s-Uap-jPRb-uiE"}">t\u0131kla</a> veya
				buradan siktir <a href="${"/signout"}" class="${"s-Uap-jPRb-uiE"}">git</a></p>` : ``}
		
		${!user ? `Merhaba<br class="${"s-Uap-jPRb-uiE"}">Coinci
			<p class="${"text-xl mt-4 s-Uap-jPRb-uiE"}"><a href="${"/login"}" class="${"s-Uap-jPRb-uiE"}">Giri\u015F yap</a> veya
				<a href="${"/signup"}" class="${"s-Uap-jPRb-uiE"}">Kay\u0131t ol</a></p>` : ``}</h1>
</section>`;
});
export { Routes as default, load };
