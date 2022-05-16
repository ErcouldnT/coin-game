<script context="module">
	// export const router = false;
  export async function load({ session }) {
    return {
			props: {
					user: session.user
			}
    };
  };
</script>

<script>
	export let user;
	console.log(user);
	
</script>

<svelte:head>
	<title>Coin Game!</title>
	<meta name="description" content="Coin game app" />
</svelte:head>

<section>
	<h1 class="mb-4">
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		{#if user}
			Merhaba<br />{user.username.toUpperCase()}!
			<p class="text-xl mt-4">
				Cüzdana gitmek için <a href="/wallet">tıkla</a> veya
				buradan siktir <a href="/signout">git</a>
			</p>
		{/if}
		
		{#if !user}
			Merhaba<br />Coinci
			<p class="text-xl mt-4">
				<a href="/login">Giriş yap</a> veya
				<a href="/signup">Kayıt ol</a>
			</p>
		{/if}

	</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
