<svelte:options immutable={true} />

<script>
  import { createEventDispatcher } from "svelte";

  export let todo;
  $: console.log("updatedTodo", todo);
  const dispatch = createEventDispatcher();
  const handleDelete = () => {
    // console.log("deleteId",id)
    dispatch("deleteItem", {
      id: todo.id,
    });
  };
  const handleEdit = () => {
    dispatch("editItem", todo);
  };
</script>
<!-- {@debug todo} -->
{#if todo.done}
  <strike role="list"><p>{todo.text}</p></strike>
{:else}
  <p role="list">{todo.text}</p>
{/if}
<button on:click={handleEdit}>Edit</button>
<button on:click={handleDelete}>delete</button>

<style>
</style>
