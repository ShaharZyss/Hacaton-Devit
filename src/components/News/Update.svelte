<script>
  import { onMount } from "svelte";
  export let updateTitle;
  export let updateContent;

  onMount(() => {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems, {});
  });
</script>

<li>
  <div class="collapsible-header">
    <i class="material-icons green-text">update</i>
    {updateTitle}
  </div>
  <div class="collapsible-body">
    <span>{updateContent}</span>
  </div>
</li>
