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

  let total = 0;

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
    const URL = '/auth/wallet';
    const res = await fetch(URL, {
      methot: 'GET',
      // credentials: "same-origin",
      // credentials: 'include'
    });
    const data = await res.json();
    // console.log(data);
    
    user.wallet = data.wallet;
    // console.log(user);
    
    // to filter coins
    const allCoinsURL = '/auth/coins';
    const resCoins = await fetch(allCoinsURL);
    allCoins = await resCoins.json();
    // console.log(allCoins);

    await getTotalValue();
  });

  const coinExchange = async () => {
    if (!fromThisCoin) return;
    if (!thisAmount) return;
    if (!toThisCoin) return;
    // api call
    const URL = '/auth/exchange';
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // credentials: 'include',
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

  const getTotalValue = async () => {
    const URL = '/auth/total';
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user.wallet),
    });

    const data = await res.json();
    total = data.total.toFixed(0);
    // console.log(total);
    return total;
  };

  const updateTotal = async () => {
    total = 0;
    await getTotalValue();
  };
</script>

<section>
  <div class="text-center p-5 flex flex-col items-center">
    <div class="text-center">
      <button on:click={updateTotal} class="bg-blue-600 text-white rounded-full p-3 m-5">
        Cüzdan değeri{total === 0 ? " hesaplanıyor..." : `: ~${total} USD`}
      </button>
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
        <input bind:value={fromThisCoin} class="p-2 rounded-xl" type="text" placeholder="Cüzdandan tıkla">
        <input bind:value={thisAmount} class="p-2 rounded-xl" type="text" 
          placeholder="Satış miktarı">
        <input bind:value={toThisCoin} class="p-2 rounded-xl" type="text" placeholder="Coin al">
        <button on:click|preventDefault={coinExchange} class="bg-blue-500 text-white p-2 rounded-xl w-20">Çevir</button>
      </div>
    </form>
    {#if toThisCoin}
      {#each searchedCoins.slice(0, 100) as coin}
        <p on:click={() => {toThisCoin = coin.id}} class="cursor-pointer">{coin.name}</p>
      {/each}
    {/if}
    {#if !toThisCoin && fromThisCoin && searchedWallet.length > 1}
      {#each searchedWallet.slice(0, 100) as coin}
        <!-- todo: Cüzdandaki coin'lerin id'leri yok! -->
        <p on:click={() => {fromThisCoin = coin.id}} class="text-orange-500 cursor-pointer">({coin.name.toUpperCase()}) satmak için tıkla</p>
      {/each}
    {/if}
  </div>
</section>

