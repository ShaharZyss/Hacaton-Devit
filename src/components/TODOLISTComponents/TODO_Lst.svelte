<script>
	import Task from './Task.svelte'

  let todo_arr = [
    {task: "Finish UI", isDone: true},
    {task: "Upload to Git", isDone: true},
    {task: "Prepare Presentation", isDone: true},
    {task: "Get 100", isDone: false}
  ];

  let newTask = "";

  const handleDelete = e => {
    todo_arr = todo_arr.filter(todo => todo.isDone !== e.detail.isDone || todo.task !== e.detail.task)
  }

  const handleAddition = () => {
    todo_arr = [...todo_arr, {task: newTask, isDone: false}];
  }
  
</script>

<style>

  .todo{
    height: 88vh;
    overflow: auto; 
    margin-right: 0;
  }

  @media only screen and (max-width: 768px) {
    .row{
      margin: 0;
      width: 100%;
    }

    .col.s12{
      margin: 0;
      padding: 0;
      width: 100%;
    }
    
    .todo{
      height: 40vh;
    }

  }
</style>


<div class="row">
    <div class="col s12">
      <div class="card">
        <span class="card-title">To-Do List</span>
        <div class="card-content todo" >
          {#each todo_arr as task, i (i)}
            <Task task={task.task} isDone={task.isDone} on:delete={handleDelete}></Task>
          {/each}
        </div>
        <div class="card-action">
          <div class="input-field inline s12 m5">
            <input id="add-task" type="text" class="validate" bind:value={newTask}>
            <label for="add-task">Task</label>
          </div>
          <a href="#!" on:click={handleAddition}><i class="material-icons green-text">add</i></a>
        </div>
      </div>
    </div>
  </div>