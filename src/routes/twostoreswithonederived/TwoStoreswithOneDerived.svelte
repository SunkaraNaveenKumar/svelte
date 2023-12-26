<script>
  import {
    combineStore,
    firstStore,
    secondStore,
    handleChangeFirstStore,
    handleCombineStore

} from "../../stores/twostoreswithonederived";
</script>

<input bind:value={$firstStore} />
<input bind:value={$secondStore} />
<p>{$combineStore}</p>
<button
  on:click={() => {
    handleChangeFirstStore("naveen");
  }}>Click</button
>
<button on:click={()=>{handleCombineStore("vishnu")}}>Change combine derived store</button>
