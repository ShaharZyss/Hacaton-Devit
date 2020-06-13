<script>
  import SchedEvent from "./scheduledEvent.svelte";
  import { onMount } from "svelte";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import { db } from "../../API/firebaseHandler";

  export let uid;

  const query = db.collection("schadule").where("uid", "==", uid);
  const events = collectionData(query, "id").pipe(startWith([]));

  let event = "";
  let date = "";
  let time = "";

  const handleAddition = () => {
    event = document.getElementById("add-event").value;
    date = document.getElementById("add-date").value;
    time = document.getElementById("add-time").value;

    db.collection("schadule").add({
      uid,
      event,
      date,
      time
    });

    event = "";
    date = "";
    time = "";
  };

  const handleDelete = e => {
    const { id } = e.detail;
    db.collection("schadule")
      .doc(id)
      .delete();
  };

  onMount(() => {
    // initialize

    var elems = document.querySelectorAll(".datepicker");
    var instances = M.Datepicker.init(elems, {
      format: "dd/mm/yyyy"
    });

    var elems = document.querySelectorAll(".timepicker");
    var instances = M.Timepicker.init(elems, {
      defaultTime: "now"
    });
  });
</script>

<!-- <style>
  @media only screen and (max-width: 768px) {
    .row{
      margin: 0;
    }

  }
</style> -->

<div class="row">
  <div class="card" style="">
    <span class="card-title">Schedule</span>
    <div class="card-content" style="height: 20vh; overflow: auto;">
      {#each $events as event}
        <SchedEvent {...event} on:delete={handleDelete} />
      {/each}
    </div>

    <div class="card-action">

      <div class="input-field inline s12 m3">
        <input id="add-event" type="text" class="validate" />
        <label for="add-event">Event</label>
      </div>

      <div class="input-field inline s12 m3">
        <input id="add-date" type="text" class="datepicker" />
        <label for="add-date">Date</label>
      </div>

      <div class="input-field inline s12 m3">
        <input id="add-time" type="text" class="timepicker" />
        <label for="add-time">Time</label>
      </div>

      <a href="#!" on:click={handleAddition}>
        <i class="material-icons green-text">add</i>
      </a>
    </div>
  </div>
</div>
