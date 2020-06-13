<script>
  import ToDoLst from "../TODOLISTComponents/TODO_Lst.svelte";
  import Schedule from "../scheduleComponents/Schedule.svelte";
  import TeamUpdates from "../TeamUpdatesComponents/TeamUpdate.svelte";
  import News from "../News/News.svelte";
  import Footer from "../Layout/Footer.svelte";
  import { onMount } from "svelte";
  import { auth } from "../../API/firebaseHandler";

  export let accessLevel = "manager";
  export let Updates;
  export let uid;

  onMount(() => {
    var elems = document.querySelectorAll(".fixed-action-btn");
    var instances = M.FloatingActionButton.init(elems, {
      direction: "up"
    });
  });
</script>

<style>
  .container {
    padding: 0;
    margin: 8px;
    display: flex;
    width: 95%;
    max-width: none;
  }

  .toDoList {
    flex: 15;
    margin: 8px;
  }

  .MainBlock {
    margin: 8px;
    flex: 25;
    display: flex;
    flex-direction: column;
  }

  .innerBlock {
    margin: 8px;
    flex: 25;
    display: flex;
    flex-direction: row;
  }

  .schedule {
    flex: 25;
  }

  .update {
    flex: 25;
    margin: 8px;
    margin-top: 0;
  }

  .News {
    flex: 25;
    margin: 15px;
    margin-top: 0;
  }
</style>

<div class="container">
  <div class="toDoList">
    <ToDoLst {uid} />
  </div>

  <div class="MainBlock">
    <div class="schedule">
      <Schedule {uid} />
    </div>

    <div class="innerBlock">
      <div class="update">
        <TeamUpdates {accessLevel} {Updates} />
      </div>

      <div class="News">
        <News {accessLevel} />
      </div>
    </div>
  </div>

  <div class="fixed-action-btn">
    <button class="btn-floating btn-large blue">
      <i class="large material-icons">mode_edit</i>
    </button>
    <ul>
      <li>
        <button class="btn-floating red" on:click={() => auth.signOut()}>
          <i class="material-icons">close</i>
        </button>
      </li>
    </ul>
  </div>

</div>

<Footer />
