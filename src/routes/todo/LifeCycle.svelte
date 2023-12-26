<script>
    import { afterUpdate, beforeUpdate, onDestroy, onMount } from "svelte";
    let count = 0;
    let previous = 0;
    // onMount(() => {
    //     // console.log("count1",count)
    //     count++;
    //     console.log("onMount", count);
    //     // console.log("count2",count)
    // });
    // beforeUpdate(() => {
    //     console.log("bf update", count);
    // });

    // afterUpdate(() => {
    //     count++;
    //     console.log("af update", count);
    // });
    onDestroy(() => {
        console.log("onDestroy");
    });
</script>

<h1>{count}</h1>
<h2>{previous}</h2>
<button
    on:click={() => {
        previous = count;
        count++;
    }}>add</button
>
