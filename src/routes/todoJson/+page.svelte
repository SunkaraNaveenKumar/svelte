<script>
  import { onMount } from "svelte";
  import { fetchUsers } from "../../stores/todoJsonStore";
  import TodoJsonMain from "./todoJsonMain.svelte";
  onMount(async () => {
    await fetchUsers();
  });
</script>
<TodoJsonMain />
