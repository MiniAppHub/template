import { MiniApp } from './api/sdk.js';

const out = document.getElementById('out');
const app = new MiniApp();

document.getElementById('btn').addEventListener('click', async () => {
  const res = await app.call('system.info');
  out.textContent = JSON.stringify(res, null, 2);
});
