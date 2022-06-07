<script context="module">
  // export const router = false;
  export async function load({ session }) {
    console.log(session);

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
  <title>Giriş yap</title>
</svelte:head>

<script>
  // import { session } from '$app/stores';
  // $session.user;  // you must set cookie.
  // import { goto } from '$app/navigation';

  let username = '';
  let password = '';
  let message = '';

  // const URL = 'http://localhost:3001/api/v1/user/login';

  async function userLogin () {
		const res = await fetch('/auth/login', {
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
      // message = 'Giriş başarılı.'
      
      // const data = await res.json();
      // const user = data.user;

      // console.log(user);
      // console.log($session.user);
      // $session.user['_id'] = await user._id;
      // $session.user.username = await user.username;
      // $session.user.wallet = await user.wallet;
      // window.location = '/wallet';
    } else {
      message = 'Yanlış yazdın aq.'
    };
	};

  const logIn = async () => {
    if (!username) return;
    if (!password) return;
    await userLogin();
    password = '';
  };
</script>

<section>
  <h1 class="p-10">GİRİŞ</h1>
  {#if message}
    <p class="text-center">{message}</p>
  {/if}
  <form class="flex flex-col p-10 gap-1 items-center" action="">
    Kullanıcı adı
    <input class="p-2 rounded-xl" bind:value={username} type="text" autofocus>
    Şifre
    <input class="p-2 rounded-xl" bind:value={password} type="password">
    <button class="bg-orange-500 text-white p-2 rounded-xl w-20" on:click|preventDefault={logIn}>Tamam</button>
  </form>
</section>

