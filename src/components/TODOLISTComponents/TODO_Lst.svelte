<script>
  import Task from "./Task.svelte";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import { db } from '../../API/firebaseHandler'

  export let uid;

  const query = db.collection("todos").where("uid", "==", uid);
  const todos = collectionData(query, "id").pipe(startWith([]));

  let task = "";

  // const handleDelete = e => {
  //   todo_arr = todo_arr.filter(
  //     todo => todo.isDone !== e.detail.isDone || todo.task !== e.detail.task
  //   );
  // };

  function add() {
    db.collection("todos").add({
      uid,
      task,
      isDone: false
    });
    task = "";
  }

  // function updateStatus(event) {
  //   const { id, newStatus } = event.detail;
  //   db.collection("todos")
  //     .doc(id)
  //     .update({ complete: newStatus });
  // }

  function removeItem(event) {
    const { id } = event.detail;
    db.collection("todos")
      .doc(id)
      .delete();
  }
</script>

<div class="row">
  <div class="col s12 m11">
    <div class="card">
      <span class="card-title">To-Do List</span>
      <div
        class="card-content"
        style="height: 88vh; overflow: auto; margin-right: 0;">
        {#each $todos as task}
          <Task {...task} on:delete={removeItem} />
        {/each}
      </div>
      <div class="card-action">
        <div class="input-field inline s12 m5">
          <input
            id="add-task"
            type="text"
            class="validate"
            bind:value={task} />
          <label for="add-task">Task</label>
        </div>
        <a href="#!" on:click={add}>
          <i class="material-icons green-text">add</i>
        </a>
      </div>
    </div>
  </div>
</div>
