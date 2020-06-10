<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  
  export let scheduledEvent;

  const handleDelete = () => {
      dispatch("delete", scheduledEvent)
  };
</script>

<div class="row inline">
  <div class="col s12 m9">
    <p>
      <b>{scheduledEvent.event}</b> in {scheduledEvent.date}, {scheduledEvent.time}
    </p>
  </div>
  <div class="col 12 m1">
    <a href="#!" on:click={handleDelete}>
      <i class="material-icons red-text">close</i>
    </a>
  </div>
</div>
