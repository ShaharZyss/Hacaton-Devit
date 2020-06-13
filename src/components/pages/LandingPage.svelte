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

  @media only screen and (max-width: 768px) {
    .container {
      padding: 0;
      display: inherit;
      text-align: center;
    }

    .MainBlock {
      margin: 4px;
      display: block;
      flex-direction: column;
    }

    .innerBlock {
      margin: 0px;
      display: flex;
      flex-direction: row;
    }

    .update {
      margin: 0;
      margin-right: 1px;
    }

    .News {
      margin: 0;
      margin-left: 1px;
    }
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
        <News {uid} />
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
      <li>
        <a href="https://drive.google.com/drive/" class="btn-floating green accent-3">
          <i class="material-icons">cloud</i>
        </a>
      </li>
      <li>
        <a href="https://stackoverflow.com/" class="btn-floating green accent-3">
          <i class="material-icons">code</i>
        </a>
      </li>
    </ul>
  </div>

</div>

<Footer />
