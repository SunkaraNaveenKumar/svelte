<script>
    import Button from "./Button.svelte";
    export let text = "";
    export let editToggle;
    export let handleAddtext;
    export let handleCancel;
    export let handleSave;
    export let taskDone;
</script>

<input type="text" placeholder="Enter some text" bind:value={text} />
<input type="checkbox" role="checkbox" bind:checked={taskDone} />
{#if editToggle}
    <Button on:click={handleSave} buttonText="Save" />
    <Button on:click={handleCancel} buttonText="Cancel" />
{:else}
    <Button buttonText="Add" on:click={handleAddtext} />
{/if}
