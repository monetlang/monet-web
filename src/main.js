import './app.css'
import App from './App.svelte'
// import init from '../../pkg'
import init from '../../pkg'

async function load() {
  await init();
}

load();

const app = new App({
  target: document.getElementById('app'),
})

export default app
