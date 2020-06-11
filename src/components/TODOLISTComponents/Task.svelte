<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let task;
  export let isDone;

  // const paint = () => {
  //   if (isDone == true) {
  //     return "green-text lighten-2";
  //   }
  //   return "";
  // };

  const handleDelete = () => {
    dispatch("delete", {
      task: task,
      isDone: isDone
    });
  };
</script>

<style>
  .done {
    color: green;
  }
</style>

<div class="row inline">
  <div class="col s12 m9">
    <form action="#" class="inline">
      <label class:done={isDone}>
        <input type="checkbox" bind:checked={isDone} />
        <span>{task}</span>
      </label>
    </form>
  </div>
  <div class="col 12 m1">
    <a href="#!" on:click={handleDelete}>
      <i class="material-icons red-text">close</i>
    </a>
  </div>
</div>
