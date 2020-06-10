<script>
	import Task from './Task.svelte'

  let todo_arr = [
    {task: "try 1 5 6 7 ", isDone: false},
    {task: "try 2", isDone: true},
    {task: "try 3", isDone: true},
    {task: "try 4", isDone: false}
  ];

  const handleDelete = e => {
    todo_arr = todo_arr.filter(todo => todo.isDone !== e.detail.isDone || todo.task !== e.detail.task)
  }

  const handleAddition = () => {
    let task = document.getElementById("add-task").value
    todo_arr = [...todo_arr, {task: task, isDone: false}];
  }
  
</script>

<div class="row">
    <div class="col s12 m4">
      <div class="card">
        <span class="card-title">Card Title</span>
        <div class="card-content">
          {#each todo_arr as task, i (i)}
            <Task task={task.task} isDone={task.isDone} on:delete={handleDelete}></Task>
          {/each}
        </div>
        <div class="card-action">
          <div class="input-field inline s12 m5">
            <input id="add-task" type="text" class="validate">
            <label for="add-task">Task</label>
          </div>
          <a href="#!" on:click={handleAddition}><i class="material-icons green-text">add</i></a>
        </div>
      </div>
    </div>
  </div>