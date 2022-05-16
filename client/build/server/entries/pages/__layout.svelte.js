import { c as create_ssr_component } from "../../chunks/index-1259f1f6.js";
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.s-PoaHcXV6SIWL.s-PoaHcXV6SIWL{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.s-PoaHcXV6SIWL.s-PoaHcXV6SIWL{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.s-PoaHcXV6SIWL a.s-PoaHcXV6SIWL{font-weight:bold}@media(min-width: 480px){footer.s-PoaHcXV6SIWL.s-PoaHcXV6SIWL{padding:40px 0}}.s-PoaHcXV6SIWL.s-PoaHcXV6SIWL{}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"s-PoaHcXV6SIWL"}"></header>

<main class="${"s-PoaHcXV6SIWL"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"s-PoaHcXV6SIWL"}"><p class="${"s-PoaHcXV6SIWL"}">Proje dosyalar\u0131 i\xE7in 
    <a href="${"https://github.com/ErcouldnT/coin-game"}" class="${"s-PoaHcXV6SIWL"}">github</a>&#39;a
    gider.
  </p>
</footer>`;
});
export { _layout as default };
