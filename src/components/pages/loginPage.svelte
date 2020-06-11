<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let name = "";
  let password = "";

  const handleLogin = () => {
    dispatch("login", {
      name: name,
      password: password
    });
  };
</script>

<div class="row">
    <div class="card" style = "margin: 10px 30%">
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
        <button
          class="waves-effect waves-light btn"
          on:click={handleLogin}>
          <i class="material-icons left">login</i>
          Login
        </button>
      </div>
    </div>
</div>
