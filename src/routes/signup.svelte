<script context="module">
  // export const router = false;
  export async function load({ session }) {
    // console.log(session);

    if (session.user) {
      return {
          status: 302,
          redirect: "/"
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
  <title>Kayıt ol</title>
</svelte:head>

<script>
  import { goto } from '$app/navigation';

  let username = '';
  let password = '';
  let message = '';

  // const URL = 'http://localhost:3001/api/v1/user/signup';

  const register = async () => {
    try {
      const res = await fetch('/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });
  
      if (res.status === 200) {
        return window.location.reload();
        // goto('/wallet');
      };
  
      message = 'Böyle bir kullanıcı zaten var aq.'
    } catch (error) {
      console.log(error);
    };
	};

  const signUp = async () => {
    if (!username) return;
    if (!password) return;

    await register();
    username = '';
    password = '';
  };
</script>

<section>
  <h1 class="p-10">KAYIT</h1>
  {#if message}
    <p class="text-center">{message}</p>
  {/if}
  <form class="flex flex-col p-10 gap-1 items-center" action="">
    Kullanıcı adı
    <input class="p-2 rounded-xl" bind:value={username} type="text" autofocus>
    Şifre
    <input class="p-2 rounded-xl" bind:value={password} type="password">
    Tekrar
    <input class="p-2 rounded-xl" bind:value={password} type="password">
    <button class=" bg-orange-500 text-white p-2 rounded-xl w-20" on:click|preventDefault={signUp}>Tamam</button>
  </form>
</section>

