<script>
    import SchedEvent from './scheduledEvent.svelte'

  let events_list = [
    { event: "bla bla", date: "Jun 24, 2020", time: "05:21 PM" },
    { event: "bla bla", date: "Jun 19, 2020", time: "04:21 AM" },
    { event: "bla bla", date: "Feb 20, 2020", time: "04:41 PM" }
  ];

  let newEvent = "";
  let newDate = "";
  let newTime = "";

    let event;
    let date;
    let time;

  const handleAddition = () => {
    events_list = [...events_list, { event: event, date: date, time: time }];

    event = "";
    date = "";
    time = "";


  };

  const handleDelete = e => {
      console.log(e.detail);
      events_list = events_list.filter(s_event => s_event.event !== e.detail.event || s_event.date !== e.detail.date || s_event.time != e.detail.time);
  }

  // initialize
  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".datepicker");
    var instances = M.Datepicker.init(elems, {
      format: "dd/mm/yyyy"
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".timepicker");
    var instances = M.Timepicker.init(elems, {
        defaultTime: 'now'
    });
  });
</script>

<div class="row">
    <div class="card">
      <span class="card-title">SCHEDULE</span>
      <div class="card-content" style = "height: 20vh; overflow: auto;">
        {#each events_list as event, i (i)}
            <SchedEvent scheduledEvent={event} on:delete={handleDelete}></SchedEvent>
        {/each}
      </div>

      <div class="card-action">

        <div class="input-field inline s12 m3">
          <input id="add-event" type="text" class="validate" bind:value={event}/>
          <label for="add-event">Event</label>
        </div>

        <div class="input-field inline s12 m3">
          <input id="add-date" type="text" class="datepicker" bind:value={date}/>
          <label for="add-date">Date</label>
        </div>

        <div class="input-field inline s12 m3">
          <input id="add-time" type="text" class="timepicker" bind:value={time}/>
          <label for="add-time">Time</label>
        </div>

        <a href="#!" on:click={handleAddition}>
          <i class="material-icons green-text">add</i>
        </a>
      </div>
    </div>
</div>
