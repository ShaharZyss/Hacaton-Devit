<script>
  import LandingPage from "./components/pages/LandingPage.svelte";
  import LoginPage from "./components/pages/loginPage.svelte";
  import { getAccessLevel } from "./API/firebaseSettings.js";

  let acl = "waiting";
  let displayLogin = true;
  let page = "login";

  const checkIfUserExists = e => {
    getAccessLevel(e.detail.name, e.detail.password).then(data => {
      acl = data;
      if(acl != "waiting" && acl != undefined){
        displayLogin = false;
        page = "LandingPage";
      }
    });
  };
</script>

<main>

  <div>
    {#if page == 'login'}
    <LoginPage on:login={checkIfUserExists} />
    {:else if page == "LandingPage"}
      <div>
        <LandingPage accessLevel={acl}/>
      </div>
    {/if}
  </div>

</main>
