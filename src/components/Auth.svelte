<script lang="ts">
  import { supabase } from "../supabase.ts";

  let email;
  let loading = false;

  const handleLogin = async () => {
    try {
      loading = true;
      console.log(email);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;

      alert("Check your email for the login link!");
    } catch (error) {
      console.error(error);
      let err_str = "Auth error: " + error.error_description;
      alert(error.message);
    } finally {
      loading = false;
    }
  };
</script>

<h1 class="font-bold text-center text-2xl text-gray-800">Login</h1>

<p class="text-center mt-2">Sign in via special link with your email below.</p>

<form on:submit|preventDefault={handleLogin} class="form my-6">
  <div class="flex flex-col mb-2">
    <label for="todo" class="font-bold text-gray-800">Email</label>
    <input
      type="email"
      name="email"
      class="rounded-lg shadow-sm p-2 border border-gray-200"
      placeholder="Your email"
      bind:value={email}
    />
  </div>
  <button
    type="submit"
    class="rounded w-full shadow-sm bg-green-500 py-2 px-4 text-white"
    disabled={loading}>Log In</button
  >
</form>
