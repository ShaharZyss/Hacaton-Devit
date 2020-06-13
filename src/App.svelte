<script>
  import LandingPage from "./components/pages/LandingPage.svelte";
  import LoginPage from "./components/pages/loginPage.svelte";
  import { getAccessLevel } from "./API/firebaseSettings.js";
  import Header from "./components/Layout/Header.svelte"
  import Footer from "./components/Layout/Footer.svelte"

  const test = true;

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
  
  
  if(test) page = "LandingPage";
</script>

<style>
  .wrapper{
  background-color: #0b5e72;
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>

<main>

  <Header/>

  <div class="wrapper">
  <div style="text-align: center;">
    {#if page == 'login'}
    <LoginPage on:login={checkIfUserExists} />
    {:else if page == "LandingPage"}
      <div>
        <LandingPage accessLevel={acl}/>
      </div>
    {/if}
  </div>
</div>

</main>
