<script>
  import { user } from './stores.js';

  let user_value;
  user.subscribe((value) => {
    user_value = value;
  });
</script>

<h1>Welcome, {user_value.name}!</h1>
<p>You have {user_value.trackers.length} active trackers.</p>

{#if user_value.trackers.length > 0}
  <div class="tracker-list">
    <ul>
      {#each user_value.trackers as tracker (tracker.id)}
        <li>{tracker.name}</li>
      {/each}
    </ul>
  </div>
{/if}

<style lang="scss">
  * {
    text-align: left;
  }
</style>
