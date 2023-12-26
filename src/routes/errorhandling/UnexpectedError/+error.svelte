<script>
    import {page} from "$app/stores"
$:console.log($page)
</script>
<h1>{$page.error.message}</h1>
<p>This error page will be rendered if there is an unexpected error</p>