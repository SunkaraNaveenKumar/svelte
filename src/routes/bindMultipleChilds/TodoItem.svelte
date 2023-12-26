<svelte:options immutable={true} />
<script>
  import { afterUpdate } from "svelte";

  export let todo;
  $:console.log("Updatedtodo",todo)
//   afterUpdate(()=>{
//     console.log("updatedTodo",todo)
//   })
</script>

<div class="todo">
  <p>{todo.name}</p>
  <input type="checkbox" bind:checked={todo.done} on:change/>
</div>

<style>
  .todo {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
</style>
