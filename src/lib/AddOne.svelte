<script>
  import init, { run, add } from '../../pkg';
  export let n, m;
  $: result = 0;


  async function load() {
    await init();
    result = add(n, m);
  }

  load();
</script>

<code>add({n}, {m}) = {result}</code>