<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let id;
  export let event;
  export let date;
  export let time;

  const handleDelete = () => {
    dispatch("delete", { id });
  };
</script>

<div class="row inline">
  <div class="col s12 m9">
    <p>
      <b>{event}</b>
      in {date}, {time}
    </p>
  </div>
  <div class="col 12 m1">
    <a href="#!" on:click={handleDelete}>
      <i class="material-icons red-text">close</i>
    </a>
  </div>
</div>
