<script>
  import {
    users,
    error,
    handleGetUserInfo,
    userInfo,
  } from "../../stores/todoJsonStore";
    // $: console.log(":error", $error.error);
  //   $:console.log("users",$users)
//   $: console.log("userInfo", $userInfo);
</script>

<ul>
  {#if $error}
    <p>{$error.error}</p>
  {:else}
    {#each $users as user (user.id)}
      <li>userName:{user.name}</li>
      <button
       data-testid = {user.name}
        on:click={() => {
          handleGetUserInfo(user.id);
        }}>Click</button
      >
    {/each}
  {/if}
</ul>
<div>
  {#if Object.keys($userInfo)?.length}
    <p>username:{$userInfo?.name}</p>
  {/if}
</div>
