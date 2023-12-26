<script lang="ts">
    import type { ComponentProps } from 'svelte';
  import ComponentTwo from './ComponentTwo.svelte';
    export let name:ComponentProps<ComponentTwo>["name"];
</script>
<ComponentTwo {name}/>
