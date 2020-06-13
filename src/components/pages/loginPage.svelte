<script>
  import { createEventDispatcher } from "svelte";
  import { signUp, login, checkForAuthChange } from "../../API/firebaseHandler";
  import SignupForm from "../signupForm.svelte";

  const dispatch = createEventDispatcher();

  let email = "";
  let password = "";

  const handleLogin = () => {
    login(email, password);
    // dispatch('login', checkForAuthChange());
  };
</script>

<div class="row">
  <div class="card" style="margin: 10px 30%">
    <div class="card-content">
      <span class="card-title">Login</span>
      <form id="input-form">
      <div class="input-field inline s12 m3">
        <input
          id="get-email"
          type="email"
          class="validate"
          bind:value={email}
          required />
        <label for="get-email">Email</label>
      </div>

      <div class="input-field inline s12 m3">
        <input
          id="get-password"
          type="password"
          class="validate"
          bind:value={password}
          required />
        <label for="get-password">Password</label>
      </div>
      </form>
    </div>
    <div class="card-action">
      <button class="waves-effect waves-light btn" on:click={handleLogin}>
        <i class="material-icons left">login</i>
        Login
      </button>
      <SignupForm />
    </div>
  </div>
</div>
