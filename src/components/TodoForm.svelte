<!-- TodoForm component describes the form to input a todo entry -->
<script lang="ts">
  import { addTodo } from "../stores/TodoStore.js";
  import { user } from "../stores/AuthStore.ts";

  let todo = "";
  const handleSubmit = () => {
    addTodo(todo, $user.id);
    todo = "";
    console.log("submitting");
  };
</script>

<form action="" class="my-6" on:submit|preventDefault={handleSubmit}>
  <div class="flex flex-col mb-6">
    <label for="todo" class="font-bold mb-2 text-gray-800">Todo</label>
    <input
      type="text"
      name="todo"
      bind:value={todo}
      placeholder="Write your tasks here"
      class="border p-2 shadow-sm rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 "
    />
    <button
      type="submit"
      class="border w-full py-2 px-4 shadow-sm text-white bg-teal-500 hover:bg-orange-700"
      >Submit</button
    >
  </div>
</form>
