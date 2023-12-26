<script>
  import DynamicChildBox from "./DynamicChildBox.svelte";
  let colors = ["red", "green", "yellow"];
</script>

{#each colors as color (color)}
  <div class="boxes">
    <DynamicChildBox --color={color} />
  </div>
{/each}

<style>
  .boxes {
    width:200px;
        height:100px;
        background-color: var(--color);
  }
</style>
