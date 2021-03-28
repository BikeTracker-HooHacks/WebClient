<script charset="utf-8">
  import { login, signup } from '$lib/auth';
  import { user } from '$lib/stores';
  let username, password, name;
  let isLogin = true;
  $: buttonText = isLogin ? 'Log me in!' : 'Sign me up!';
  $: switchText = isLogin ? 'Sign up instead.' : 'Already have an account? Log in.';

  async function submit() {
    const res = isLogin ? await login(username, password) : await signup(name, username, password);
    if (!res.err) {
      user.set(res.profile);
    } else {
      console.log(res);
    }
  }
</script>

<form on:submit|preventDefault={submit}>
  {#if !isLogin}
    <input type="text" name="name" id="name" placeholder="Name" bind:value={name} />
  {/if}
  <input type="text" name="username" id="username" bind:value={username} placeholder="Email" />
  <input
    type="password"
    name="password"
    id="password"
    bind:value={password}
    placeholder="Password"
  />
  <input type="submit" value={buttonText} />
</form>
<a
  href="#"
  on:click={() => {
    isLogin = !isLogin;
  }}>{switchText}</a
>

<style type="text/css" media="screen">
  form {
    display: flex;
    flex-direction: column;
  }
</style>
