<script>
  import Update from "./Update.svelte";

  export let accessLevel;

  let Updates = [
    { updateTitle: "The pizzas are Here!", updateMsg: "The key to getting a slice is to push, push and push people. They stand in your way!" },
    { updateTitle: "We finished!", updateMsg: "F*cking finally" }
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
  <div class="card" style="text-align: center;">
    <span class="card-title">Company News</span>

    {#if accessLevel == 'manager'}
    <div class="card-content box" style="height: 35vh; overflow: auto;">
      <ul class="collapsible popout">
        {#each Updates as update, i (i)}
              <Update {update} />
            {/each}
          </ul>
        </div>
      <div class="card-action" style="text-align: left;">
        <div class="input-field inline s12 m5">
          <input
            id="add-news-Title"
            type="text"
            class="validate"
            bind:value={newUpdateTitle} />
          <label for="add-news-Title">Update Title</label>
        </div>

        <div class="input-field inline s12 m5">
          <input
            id="add-news-Msg"
            type="text"
            class="validate"
            bind:value={newUpdateMsg} />
          <label for="add-news-Msg">Update Message</label>
        </div>

        <a href="#!" on:click={handleAddition}>
          <i class="material-icons green-text">add</i>
        </a>
      </div>

    {:else}    
        <div class="card-content box"  style = "height: 53vh; overflow: auto;">
          <ul class="collapsible popout">
            {#each Updates as update, i (i)}
              <Update {update} />
            {/each}
          </ul>
        </div>
        {/if}

  </div>
</div>

<style>
</style>