<script context="module">
  // export const router = false;
  export async function load({ session }) {
    // console.log(session);
    if (!session.user) {
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
  <title>Çıkış</title>
</svelte:head>

<script>
  import { goto } from '$app/navigation';

  export let user;

  const userLogout = async () => {
    const res = await fetch('/auth/signout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (res.status === 302) {
      return window.location.reload();
      // goto('/');
    };
  };
</script>

<section class="text-center m-5">
  <h1 class="m-5">Çıkış yapmak istediğine emin misin, {user.username}?</h1>
  <button on:click|preventDefault={userLogout} 
    class="bg-blue-500 p-4 text-white text-2xl rounded-full">
    Çikişşş yapiyirim
  </button>
</section>

