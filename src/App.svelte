<script>
  import LandingPage from "./components/pages/LandingPage.svelte";
  import LoginPage from "./components/pages/loginPage.svelte";
  import Header from "./components/Layout/Header.svelte";
  import Footer from "./components/Layout/Footer.svelte";
  import { authState } from "rxfire/auth";
  import { auth } from "./API/firebaseHandler";
  
  let user;
  const unsubscribe = authState(auth).subscribe(u => (user = u));

</script>

<!-- <style>
  .wrapper {
    background-color: #0b5e72;
    margin: 0;
    padding: 0;
    text-align: center;
  }
</style> -->

<main>

  <Header />

  {#if !user}
    <LoginPage />
  {:else}
    <div>
      <LandingPage uid={user.uid}/>
    </div>
  {/if}

</main>
