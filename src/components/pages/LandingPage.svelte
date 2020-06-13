<script>
  import ToDoLst from "../TODOLISTComponents/TODO_Lst.svelte";
  import Schedule from "../scheduleComponents/Schedule.svelte";
  import TeamUpdates from "../TeamUpdatesComponents/TeamUpdate.svelte";
  import News from "../News/News.svelte";
  import Footer from "../Layout/Footer.svelte";
  export let accessLevel;

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
    <ToDoLst />
  </div>

  <div class="MainBlock">
    <div class="schedule">
      <Schedule />
    </div>

    <div class="innerBlock">
      <div class="update">
        <TeamUpdates {accessLevel}/>
      </div>

      <div class="News">
        <News {accessLevel}/>
      </div>
    </div>
  </div>

</div>

<Footer/>