<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let name = "";
  let password = "";
  export let IsEnabled;

  const handleLogin = () => {
    dispatch("login", {
      name: name,
      password: password
    });
  };
</script>

<style>
  .disable {
    display: none;
  }

  .enable {
    display: block;
  }
</style>

<div class="row" class:disable={!IsEnabled} class:enable={IsEnabled}>
  <div class="col s12 m6">
    <div class="card">
      <div class="card-content">
        <span class="card-title">Login</span>
        <div class="input-field inline s12 m3">
          <input id="get-name" type="text" class="validate" bind:value={name} />
          <label for="get-name">Name</label>
        </div>

        <div class="input-field inline s12 m3">
          <input
            id="get-password"
            type="text"
            class="validate"
            bind:value={password} />
          <label for="get-password">Password</label>
        </div>
      </div>
      <div class="card-action">
        <button class="waves-effect waves-light btn" on:click={handleLogin}>
          <i class="material-icons left">login</i>
          Login
        </button>
      </div>
    </div>
  </div>
</div>
