<script lang="ts">
  import TodoForm from "../components/TodoForm.svelte";
  import { todos } from "../stores/TodoStore.js";
  import Todo from "../components/Todo.svelte";
</script>

<main>
  <h1 class="text-2xl text-center font-bold text-gray-800 md:text-3xl">
    My First Svelte Todo App
  </h1>
  <TodoForm />
  {#each $todos as todo}
    <Todo {todo} index={todo.id} />
  {/each}
</main>
