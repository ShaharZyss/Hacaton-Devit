<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { db } from "../../API/firebaseHandler";

  const dispatch = createEventDispatcher();

  export let id;
  export let task;
  export let isDone;

  function remove() {
    dispatch("delete", { id });
  }

  onMount(() => {
    document.querySelector("#is-done").addEventListener("change", () => {
      db.collection("todos")
        .doc(id)
        .update({ isDone: isDone });
    });
  });
</script>

<style>
  .done {
    text-decoration: line-through;
    color: green;
  }
</style>

<div class="row inline">
  <div class="col s12 m9">
    <form action="#" class="inline">
      <label style="text-align: left;">
        <input type="checkbox" id="is-done" bind:checked={isDone} />
        <span class:done={isDone}>{task}</span>
      </label>
    </form>
  </div>
  <div class="col 12 m1">
    <a href="#!" on:click={remove}>
      <i class="material-icons red-text">close</i>
    </a>
  </div>
</div>
