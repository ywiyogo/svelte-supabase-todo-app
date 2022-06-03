<script lang="ts">
  import "../styles/app.css";
  import { supabase } from "../supabase.ts";
  console.log(supabase);
</script>

<main>
  <div class="container max-w-4xl mx-auto py-8">
    <slot />
  </div>
</main>
