<script>
  import { supabase } from "../supabase.ts";

  const logout = () => {
    const { error } = supabase.auth.signOut();
  };
</script>

<div class="my-4 flex justify-end">
  <button
    on:click={logout}
    class="rounded shadow-sm py-2 px-4  text-white bg-teal-500 hover:bg-orange-700"
    >Logout</button
  >
</div>
