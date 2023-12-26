<script>
  import ChildInput from "./ChildInput.svelte";
  let bindText = "";
</script>

<ChildInput bind:text={bindText} />
<p>Parent input text:{bindText}</p>
