<script>
  	import { createEventDispatcher } from 'svelte';
	  const dispatch = createEventDispatcher();

    export let title;
    export let completed;
    export let id;
    const paint = () => {
        if(completed == true){
            return "green-text lighten-2";
        }
        return "";
    }

    const handleDelete = () => {
      dispatch("delete", {id});
    }

</script>
<div class = "container">
  <div class="row ">
    <div class="col l7 m7 s7">
      <form action="#" class="inline">
        <label style = "display: inline-block;">
          <input type="checkbox" bind:checked={completed}>
          <span  class:done = {completed}>{title}</span>
        </label>
      </form>
    </div>
    <div class = "col 2"></div>
    <div class="col l3 m3 s3">
      <a href="#!" on:click={handleDelete}><i class="material-icons red-text">close</i></a>
    </div>
  </div>
</div>

<style>
  .done{
      text-decoration: line-through;
      color: green;
    }


</style>