<script>
  
	import Task from './Task.svelte'
  import axios from 'axios'
  let taskTitle = "";
  let todo_arr = [  ];

  const handleDelete = e => {
    todo_arr = todo_arr.filter(todo => todo.id !== e.detail.id)
  }

  const handleAddition = () => {
    todo_arr = [...todo_arr, {title: taskTitle, completed: false, id: todo_arr.length + 1}];
    taskTitle = "";
  }


  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => {
      todo_arr= res.data;
  });

  
</script>
<div class = "container" >
  <div class="row">
      <div class="card">
        <span class="card-title">task list</span>
        <div class="card-content" style = "height: 40vh; overflow: auto;">
          {#each todo_arr as task, i (i)}
            <Task {...task} on:delete={handleDelete} />
          {/each}
        </div>

        <div class="card-action">
        <form on:submit={handleAddition}>
          <div class="input-field inline s12 m5">
            <input id="add-task" type="text" class="validate" bind:value = {taskTitle}>
            <label for="add-task">Task</label>
          </div>
          <input type = "submit" class='material-icons green-text' style= "background-color: white; border: none;" value = "add" />
          </form>
        </div>
    </div>
  </div>
</div>
