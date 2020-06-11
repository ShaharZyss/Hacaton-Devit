<script>
  import LandingPage from "./components/pages/LandingPage.svelte";
  import { getDocs } from "./API/firebaseSettings.js";

  getDocs();

  let page = 0;
</script>

<main>
  <div>
    {#if page == 0}
      <LandingPage />
    {/if}
  </div>
</main>
