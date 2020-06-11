<script>
  import LandingPage from "./components/pages/LandingPage.svelte";
  import LoginPage from "./components/pages/loginPage.svelte";
  import { getAccessLevel } from "./API/firebaseSettings.js";

  let acl = "waiting";
  let displayLogin = true;

  const checkIfUserExists = e => {
    getAccessLevel(e.detail.name, e.detail.password).then(data => {
      acl = data;
      if(acl != "waiting" && acl != undefined){
        displayLogin = false;
      }
    });
  };
</script>

<main>

  <div>
    <LoginPage IsEnabled={displayLogin} on:login={checkIfUserExists} />
    {#if acl != 'waiting'}
      <div>
        <LandingPage accessLevel={acl} IsEnabled={!displayLogin}/>
      </div>
    {/if}
  </div>

</main>
