<script charset="utf-8">
  import { login } from '$lib/auth';
  import { user } from '$lib/stores';
  let username, password;
  async function submit() {
    const res = await login(username, password);
    if (!!res.err) {
      user.set(res);
    } else {
      console.log(res);
    }
  }
</script>

<form on:submit|preventDefault={submit}>
  <input type="text" name="username" id="username" bind:value={username} placeholder="Username" />
  <input
    type="password"
    name="password"
    id="password"
    bind:value={password}
    placeholder="Password"
  />
  <input type="submit" value="Log me in" />
</form>

<style type="text/css" media="screen">
</style>
