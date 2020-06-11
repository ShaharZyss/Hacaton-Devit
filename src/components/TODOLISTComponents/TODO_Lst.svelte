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

<div class="row">
    <div class="col s12 m11">
      <div class="card">
        <span class="card-title">To-Do List</span>
        <div class="card-content" style = "height: 88vh; overflow: auto; margin-right: 0;">
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