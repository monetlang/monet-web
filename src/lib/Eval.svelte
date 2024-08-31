<script>
  export let expr;
  export let val;
  export let file;
</script>

<h2>Monet2Wasm</h2>

<table>
  <caption>
    Built with ❤️ at <a data-sveltekit-preload-data="tap" href="https://fil.org">Filecoin Foundation</a>
  </caption>
  <thead>
    <tr>
      <th scope="col">File compiled</th>
      <th scope="col">Expression</th>
      <th scope="col">Compiled WASM</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>{file}</code></th>
      <td>{expr}</td>
      <td>{val}</td>
    </tr>
  <tbody>
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
    border: 2px solid rgb(140 140 140);
    font-family: sans-serif;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  caption {
    caption-side: bottom;
    padding: 10px;
    font-weight: bold;
  }

  thead {
    background-color: rgb(228 240 245);
  }

  th,
  td {
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;
  }

  td:last-of-type {
    text-align: center;
  }

  tbody > tr:nth-of-type(even) {
    background-color: rgb(237 238 242);
  }

</style>