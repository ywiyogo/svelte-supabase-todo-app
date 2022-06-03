<!-- TodoForm component describes the form to input a todo entry -->
<script lang="ts">
  let todo = "";
  import { addTodo } from "../stores/TodoStore.js";
  const handleSubmit = () => {
    addTodo(todo);
    todo = "";
    console.log("submitting");
  };
</script>

<form action="" class="my-6" on:submit|preventDefault={handleSubmit}>
  <div class="flex flex-col mb-2">
    <label for="todo" class="font-bold mb-2 text-gray-800">Todo</label>
    <input
      type="text"
      name="todo"
      bind:value={todo}
      placeholder="what's app"
      class="border p-2 shadow-sm rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 "
    />
    <button
      type="submit"
      class="border w-full py-2 px-4 shadow-sm  text-white bg-blue-500 hover:bg-blue-700"
      >Submit</button
    >
  </div>
</form>
