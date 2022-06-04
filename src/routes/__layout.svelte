<script lang="ts">
  import "../styles/app.css";
  import { supabase } from "../supabase.ts";
  import Auth from "../components/Auth.svelte";
  import { user } from "../stores/AuthStore.ts";
  import { loadTodos } from "../stores/TodoStore.js";
  console.log(supabase);

  user.set(supabase.auth.user());
  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session?.user);
    if (session?.user) {
      loadTodos();
    }
  });
</script>

<main>
  <div class="container max-w-4xl mx-auto py-8">
    <!-- Show the authentication page if no user logged in -->
    {#if $user}
      <slot />
    {:else}
      <Auth />
    {/if}
  </div>
</main>
