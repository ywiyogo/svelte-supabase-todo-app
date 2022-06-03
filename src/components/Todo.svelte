<!-- Todo Component describes the html visualization and interaction logic -->
<script>
  import { deleteTodo, toggleTodoCompleted } from "../stores/TodoStore";

  export let todo;
</script>

<li
  class="bg-white flex item-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4"
>
  <input
    type="checkbox"
    name="completed"
    checked={todo.completed}
    on:change={() => toggleTodoCompleted(todo.id)}
    class="mr-2 form-checkbox h-5 w-5"
  />
  <span class={`flex-1 text-gray-800 ${todo.completed ? "line-through" : ""}`}
    >{todo.text}</span
  >
  <button
    type="button"
    class="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
    on:click={() => deleteTodo(todo.id)}>Delete</button
  >
</li>
