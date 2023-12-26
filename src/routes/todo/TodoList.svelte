<script>
    import TodoItem from "./TodoItem.svelte";
    export let todos;
</script>

<div>
    {#each todos as todo (todo.id)}
    <div>
        <TodoItem {todo} on:deleteItem on:editItem />
    </div>
    {/each}
</div>

<style>
</style>
