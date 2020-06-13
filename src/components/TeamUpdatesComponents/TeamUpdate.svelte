<script>
  import Update from "./Update.svelte";
  

  export let accessLevel;
  
  export let Updates = [
    { updateTitle: "Change of Idea", updateMsg: "We changed our idea (for the 3rd time) to the employee manager app." },
    { updateTitle: "Git is Ready!", updateMsg: "Zyss finished preparing the Git." },
    { updateTitle: "UI Ready", updateMsg: "The final (beta) UI is ready for use." }
  ];

  let newUpdateTitle = "";
  let newUpdateMsg = "";

  const handleAddition = () => {
    Updates = [
      ...Updates,
      { updateTitle: newUpdateTitle, updateMsg: newUpdateMsg }
    ];

    newUpdateTitle = "";
    newUpdateMsg = "";
  };
</script>

<style>

</style>

<div class="row">
  <div class="card">
    <span class="card-title">Team Updates</span>

    <div class="card-content box"  style = "height: 30vh; overflow: auto;">
      <ul class="collapsible popout">
        {#each Updates as update, i (i)}
          <Update {update} />
        {/each}
      </ul>
    </div>

    {#if accessLevel == 'manager'}
      <div class="card-action"  style = "text-align: left;">
        <div class="input-field inline s12 m5">
          <input
            id="add-update-Title"
            type="text"
            class="validate"
            style="align-content: left;"
            bind:value={newUpdateTitle} />
          <label for="add-update-Title">Update Title</label>
        </div>

        <div class="input-field inline s12 m5" style="align-content: center;">
          <input
            id="add-update-Msg"
            type="text"
            class="validate"
            style="align-content: left;"
            bind:value={newUpdateMsg} />
          <label for="add-update-Msg">Update Message</label>
        </div>

        <a href="#!" on:click={handleAddition}>
          <i class="material-icons green-text">add</i>
        </a>
      </div>
    {/if}
  </div>
</div>
