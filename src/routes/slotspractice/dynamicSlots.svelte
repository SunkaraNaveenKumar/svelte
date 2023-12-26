<script>
  let colors = [
    { name: "red", color: "red" },
    { name: "Green", color: "green" },
    { name: "yellow", color: "yellow" },
  ];
</script>

<div class="box">
  {#each colors as color (color.name)}
    <slot {color}/>
  {/each}
</div>

<style>

</style>
