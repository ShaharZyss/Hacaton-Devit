<script>
  import SchedEvent from "./scheduledEvent.svelte";
  import { onMount } from "svelte";

  let events_list = [
    { event: "Creating Presentation", date: "Jun 10, 2020", time: "04:00 PM" },
    { event: "Product Design Meeting", date: "Jun 9, 2020", time: "9:00 AM" },
    { event: "Bulding the UI", date: "Jun 11, 2020", time: "8:30 AM" }
  ];

  let newEvent = "";
  let newDate = "";
  let newTime = "";


  const handleAddition = () => {
    newEvent = document.getElementById("add-event").value;
    newDate = document.getElementById("add-date").value;
    newTime = document.getElementById("add-time").value;
    
    events_list = [...events_list, { event: newEvent, date: newDate, time: newTime }];
    
    newEvent = ""
    newDate = ""
    newTime = ""
  };

  const handleDelete = e => {
    console.log(e.detail);
    events_list = events_list.filter(
      s_event =>
        s_event.event !== e.detail.event ||
        s_event.date !== e.detail.date ||
        s_event.time != e.detail.time
    );
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
      {#each events_list as event, i (i)}
        <SchedEvent scheduledEvent={event} on:delete={handleDelete} />
      {/each}
    </div>

    <div class="card-action">

      <div class="input-field inline s12 m3">
        <input id="add-event" type="text" class="validate" />
        <label for="add-event">Event</label>
      </div>

      <div class="input-field inline s12 m3">
        <input id="add-date" type="text" class="datepicker"/>
        <label for="add-date">Date</label>
      </div>

      <div class="input-field inline s12 m3">
        <input id="add-time" type="text" class="timepicker"/>
        <label for="add-time">Time</label>
      </div>

      <a href="#!" on:click={handleAddition}>
        <i class="material-icons green-text">add</i>
      </a>
    </div>
  </div>
</div>
