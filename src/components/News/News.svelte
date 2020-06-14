<script>
  import Update from "./Update.svelte";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import { db } from "../../API/firebaseHandler";

  export let uid;

  const query = db.collection("news");
  const updates = collectionData(query).pipe(startWith([]));

  let updateTitle = "";
  let updateContent = "";

  const handleAddition = () => {
    db.collection("news").add({
      updateTitle,
      updateContent
    });

    document.querySelector("#add-news-form").reset();

    updateTitle = "";
    updateContent = "";
  };
</script>

<style>

</style>

<div class="row">
  <div class="card" style="text-align: center;">
    <span class="card-title">Company News</span>

    {#if uid == 'HbPyUME6D9SqNIU4NlZCQzrwydC3'}
      <div class="card-content box" style="height: 35vh; overflow: auto;">
        <ul class="collapsible popout">
          {#each $updates as update}
            <Update {...update} />
          {/each}
        </ul>
      </div>
      <div class="card-action" style="text-align: left;">
        <form id="add-news-form">
          <div class="input-field inline s12 m5">
            <input
              id="add-news-Title"
              type="text"
              class="validate"
              bind:value={updateTitle} />
            <label for="add-news-Title">Update Title</label>
          </div>
          <div class="input-field inline s12 m5">
            <input
              id="add-news-Msg"
              type="text"
              class="validate"
              bind:value={updateContent} />
            <label for="add-news-Msg">Update Message</label>
          </div>
        </form>
        <a href="#!" on:click={handleAddition}>
          <i class="material-icons green-text">add</i>
        </a>
      </div>
    {:else}
      <div class="card-content box" style="height: 38vh; overflow: auto;">
        <ul class="collapsible popout">
          {#each $updates as update}
            <Update {...update} />
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</div>
