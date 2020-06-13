<script>
  import { onMount } from "svelte";
  import { signUp } from "../API/firebaseHandler";

  onMount(() => {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});

    const signupForm = document.querySelector("#signup-form");
    signupForm.addEventListener("submit", e => {
      e.preventDefault();

      const email = signupForm["signup-email"].value;
      const password = signupForm["signup-password"].value;

      signUp(email, password, signupForm);
    });
  });
  
</script>

<!-- Modal Trigger -->
<a href="#signup-modal" class="waves-effect waves-light btn modal-trigger">
  <i class="material-icons left">create</i>
  Sign Up
</a>

<!-- Modal Structure -->
<div id="signup-modal" class="modal">
  <div class="modal-content">
    <h4>Sign Up</h4>
    <form id="signup-form">
      <div class="input-field">
        <input type="email" id="signup-email" required />
        <label for="signup-email">Email Address</label>
      </div>
      <div class="input-field">
        <input type="text" id="signup-password" required />
        <label for="signup-password">Password</label>
      </div>
      <button class="waves-effect waves-light btn modal-close">
        <i class="material-icons left">create</i>
        Sign Up
      </button>
    </form>
  </div>
</div>
