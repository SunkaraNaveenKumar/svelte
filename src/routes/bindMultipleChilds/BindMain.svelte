<script>
  import TodoItem from "./TodoItem.svelte";

  let todos = [
    { id: 1, name: "naveen", done: true },
    { id: 2, name: "vishnu", done: false },
    { id: 3, name: "akbar", done: true },
  ];
  $: console.log("todos", todos);
  function toggle(toggled) {
    todos = todos.map((todo) => {
      if (todo.id === toggled.id) {
        // return a new object
        return { ...toggled };
      }

      // return the same object
      return todo;
    });
  }
</script>

<h1>Bind checkboxs</h1>
<div class="todoList">
  {#each todos as todo (todo.id)}
    <TodoItem bind:todo on:change={toggle(todo)} />
  {/each}
</div>

<style>
  .todoList {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
