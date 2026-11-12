import { mapp, Mapp } from './api/sdk.js';

const out = document.getElementById('out');

document.getElementById('btn').addEventListener('click', async () => {
  if (!Mapp.inShell) {
    out.textContent = 'Приложение открыто вне оболочки — мост недоступен.';
    return;
  }
  const [ver, settings] = await Promise.all([
    mapp.shell('getVersion'),
    mapp.shell('getSettings'),
  ]);
  out.textContent = JSON.stringify({ ver, settings }, null, 2);
});
