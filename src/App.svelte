<script>
  import Eval from './lib/Eval.svelte';
  $: expr = "...";
  $: val = 0;
  $: file = "...";

  function updateDom(e, v, f) {
    expr = e;
    val = v;
    file = f;
  }

  // Export function so Rust can call it.
  window.update_dom = updateDom;
</script>

<Eval expr={expr} val={val} file={file} />