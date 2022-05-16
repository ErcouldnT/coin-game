<script context="module">
  // export const router = false;
  export async function load({ session }) {
    // console.log(session);

    if (!session.user) {
      return {
          status: 302,
          redirect: "/login"
      };
    };

    return {
      props: {
          user: session.user
      }
    };
  }
</script>

<svelte:head>
  <title>Your wallet</title>
</svelte:head>

<script>
  export let user;

  import { onMount } from 'svelte';
  import moment from 'moment';

  let fromThisCoin = '';
  let thisAmount = '';
  let toThisCoin = '';

  let allCoins = [];
  // let searchCoin = '';

  $: searchedCoins = allCoins.filter(coin => {
    return coin.name.toLowerCase().startsWith(toThisCoin.toLowerCase())
    // || coin.symbol.toLowerCase().includes(toThisCoin.toLowerCase());
  });

  $: searchedWallet = user.wallet.filter(coin => {
    return coin.name.toLowerCase().startsWith(fromThisCoin.toLowerCase())
    // || coin.symbol.toLowerCase().includes(fromThisCoin.toLowerCase());
  });

  onMount(async () => {
    const URL = import.meta.env.DEV 
      ? 'http://localhost:3001/api/v1/user/wallet'
      : '/api/v1/user/wallet';
    const res = await fetch(URL, {
      methot: 'GET',
      // credentials: "same-origin",
      credentials: 'include'
    });
    const data = await res.json();
    // console.log(data);
    
    user.wallet = data.wallet;
    // console.log(user);
    
    // to filter coins
    const allCoinsURL = import.meta.env.DEV 
      ? 'http://localhost:3001/api/v1/user/coins'
      : '/api/v1/user/coins';
    const resCoins = await fetch(allCoinsURL);
    allCoins = await resCoins.json();
    // console.log(allCoins);
  });

  const coinExchange = async () => {
    if (!fromThisCoin) return;
    if (!thisAmount) return;
    if (!toThisCoin) return;
    // api call
    const URL = import.meta.env.DEV 
      ? 'http://localhost:3001/api/v1/user/exchange'
      : '/api/v1/user/exchange';
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        fromThisCoin,
        thisAmount: Number(thisAmount),
        toThisCoin
      })
    });
    const data = await res.json();
    user.wallet = data.wallet;
    fromThisCoin = '';
    thisAmount = '';
    toThisCoin = '';
  };
</script>

<section>
  <div class="text-center p-5 flex flex-col items-center">
    <div class="text-center">
      <button class="bg-blue-600 text-white rounded-full p-3 m-5">Cüzdan değeri hesapla</button>
    </div>
    <div>
      <table class="table-auto">
        <thead class="border-b">
          <tr class="">
            <th class="text-gray-900 px-6 py-2">Coin</th>
            <th class="text-gray-900 px-6 py-2">Miktar</th>
            <th class="text-gray-900 px-6 py-2">Tarih</th>
          </tr>
        </thead>
        <tbody>
          {#if user.wallet}
            {#each user.wallet as coin}
              <tr on:click={() => {fromThisCoin = coin.name}} class="hover:text-orange-600 cursor-pointer">
                <td>{coin.name.toUpperCase()}</td>
                <td>{coin.amount}</td>
                <td>{moment(coin.updatedAt).format('LLL')}</td>
              </tr>
            {/each}
          {/if}
        </tbody>
      </table>
    </div>
  </div>

  <div class="text-center">
    <h1 class="p-3">Coin exchange</h1>
    <p class="pb-3">{#if allCoins.length > 0}
      {`${searchedCoins.length} adet coin mevcut`}
      {/if}
    </p>
    <form action="">
      <div class="mb-5">
        <input bind:value={fromThisCoin} class="p-2 rounded-xl" type="text" placeholder="Cüzdandan seç">
        <input bind:value={thisAmount} class="p-2 rounded-xl" type="text" 
          placeholder="Satış miktarı">
        <input bind:value={toThisCoin} class="p-2 rounded-xl" type="text" placeholder="Coin al">
        <button on:click|preventDefault={coinExchange} class="bg-blue-500 text-white p-2 rounded-xl w-20">Çevir</button>
      </div>
    </form>
    {#if toThisCoin}
      {#each searchedCoins.slice(0, 100) as coin}
        <p on:click={() => {toThisCoin = coin.name}} class="cursor-pointer">{coin.name}</p>
      {/each}
    {/if}
    {#if !toThisCoin && fromThisCoin}
      {#each searchedWallet.slice(0, 100) as coin}
        <p on:click={() => {fromThisCoin = coin.name}} class="text-orange-500 cursor-pointer">({coin.name}) satılacak</p>
      {/each}
    {/if}
  </div>

</section>

