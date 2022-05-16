import { c as create_ssr_component, b as each, e as escape, a as add_attribute } from "../../chunks/index-1259f1f6.js";
import moment from "moment";
async function load({
  session
}) {
  if (!session.user) {
    return {
      status: 302,
      redirect: "/login"
    };
  }
  return {
    props: {
      user: session.user
    }
  };
}
const Wallet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchedCoins;
  let {
    user
  } = $$props;
  let fromThisCoin = "";
  let thisAmount = "";
  let toThisCoin = "";
  let allCoins = [];
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  searchedCoins = allCoins.filter((coin) => {
    return coin.name.toLowerCase().startsWith(toThisCoin.toLowerCase());
  });
  user.wallet.filter((coin) => {
    return coin.name.toLowerCase().startsWith(fromThisCoin.toLowerCase());
  });
  return `${$$result.head += `${$$result.title = `<title>Your wallet</title>`, ""}`, ""}



<section><div class="${"text-center p-5 flex flex-col items-center"}"><div class="${"text-center"}"><button class="${"bg-blue-600 text-white rounded-full p-3 m-5"}">C\xFCzdan de\u011Feri hesapla</button></div>
    <div><table class="${"table-auto"}"><thead class="${"border-b"}"><tr class="${""}"><th class="${"text-gray-900 px-6 py-2"}">Coin</th>
            <th class="${"text-gray-900 px-6 py-2"}">Miktar</th>
            <th class="${"text-gray-900 px-6 py-2"}">Tarih</th></tr></thead>
        <tbody>${user.wallet ? `${each(user.wallet, (coin) => {
    return `<tr class="${"hover:text-orange-600 cursor-pointer"}"><td>${escape(coin.name.toUpperCase())}</td>
                <td>${escape(coin.amount)}</td>
                <td>${escape(moment(coin.updatedAt).format("LLL"))}</td>
              </tr>`;
  })}` : ``}</tbody></table></div></div>

  <div class="${"text-center"}"><h1 class="${"p-3"}">Coin exchange</h1>
    <p class="${"pb-3"}">${allCoins.length > 0 ? `
      ${escape(`${searchedCoins.length} adet coin mevcut`)}` : ``}</p>
    <form action="${""}"><div class="${"mb-5"}"><input class="${"p-2 rounded-xl"}" type="${"text"}" placeholder="${"C\xFCzdandan se\xE7"}"${add_attribute("value", fromThisCoin, 0)}>
        <input class="${"p-2 rounded-xl"}" type="${"text"}" placeholder="${"Sat\u0131\u015F miktar\u0131"}"${add_attribute("value", thisAmount, 0)}>
        <input class="${"p-2 rounded-xl"}" type="${"text"}" placeholder="${"Coin al"}"${add_attribute("value", toThisCoin, 0)}>
        <button class="${"bg-blue-500 text-white p-2 rounded-xl w-20"}">\xC7evir</button></div></form>
    ${``}
    ${``}</div></section>`;
});
export { Wallet as default, load };
