<script>
  import { onMount } from "svelte";
  export let update;

  onMount(() => {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems, {});
  });
</script>

<li>
  <div class="collapsible-header">
    <i class="material-icons green-text">update</i>
    {update.updateTitle}
  </div>
  <div class="collapsible-body">
    <span>{update.updateMsg}</span>
  </div>
</li>
