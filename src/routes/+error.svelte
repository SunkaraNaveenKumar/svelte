<script>
    import { page } from "$app/stores";
    $: console.log("globla error",$page);
  </script>
  
  <h1>{$page.status} {$page.error.message}</h1>
  <p>This page will render if there is an expected error</p>
  