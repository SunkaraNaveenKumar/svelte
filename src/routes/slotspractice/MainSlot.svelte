<script>
  import BodySlot from "./BodySlot.svelte";
  import DynamicSlots from "./dynamicSlots.svelte";
</script>

<div>
  <BodySlot>
    <div slot="header">
      <h2>Home</h2>
      <h2>About Us</h2>
    </div>
    <h1>Body slot</h1>
    <div slot="footer">
      <h2>Career</h2>
      <h2>Services</h2>
    </div>
  </BodySlot>
  <BodySlot />
</div>

<DynamicSlots let:color={item}>
  <div class="box" style="--color: {item.color};">
    <div>{item.color}</div>
    <p>{item.name}</p>
  </div>
</DynamicSlots>

<style>
  .box {
    width: 5em;
    height: 5 em;
    background-color: var(--color);
  }
</style>
