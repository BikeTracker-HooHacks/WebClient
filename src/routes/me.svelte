<script>
  import { browser } from '$app/env';
  import ProfileInfo from '$lib/ProfileInfo.svelte';
  import Map from '$lib/Map.svelte';
  import { user, trackers } from '$lib/stores';
  import { get } from '$lib/api';

  let user_value;
  let tracker_values;

  user.subscribe(async (v) => {
    user_value = v;
    trackers.set([]);
    let all_trackers;
    if (browser) {
      try {
        all_trackers = await Promise.all(v.trackers.map((d) => get(`tracker/${d.id}`)));
        trackers.set(all_trackers)
      } catch (err) {
        console.log('Err will robinson');
        console.log(err);
      }
    }
  });

  trackers.subscribe((v) => (tracker_values = v));
</script>

<main>
  {#if !!user_value}
    <h1>My Profile</h1>
    <ProfileInfo />

    {#if tracker_values.length > 0}
      <Map />
    {/if}
  {/if}
</main>

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 4rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 2rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
