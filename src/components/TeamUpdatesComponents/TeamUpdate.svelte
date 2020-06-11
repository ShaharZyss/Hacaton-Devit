<script>
  import Update from "./Update.svelte";

  export let accessLevel = "manager";
  
  let Updates = [
    { updateTitle: "update1", updateMsg: "bli blu bla" },
    { updateTitle: "update2", updateMsg: "bli blu bla" },
    { updateTitle: "update3", updateMsg: "bli blu bla" }
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

<div class="row">
  <div class="card">
    <span class="card-title">Team Updates</span>

    <div class="card-content box"  style = "height: 20vh; overflow: auto;">
      <ul class="collapsible popout">
        {#each Updates as update, i (i)}
          <Update {update} />
        {/each}
      </ul>
    </div>

    {#if accessLevel == 'manager'}
      <div class="card-action">
        <div class="input-field inline s12 m5">
          <input
            id="add-update-Title"
            type="text"
            class="validate"
            bind:value={newUpdateTitle} />
          <label for="add-update-Title">Update Title</label>
        </div>

        <div class="input-field inline s12 m5">
          <input
            id="add-update-Msg"
            type="text"
            class="validate"
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

<style>
</style>