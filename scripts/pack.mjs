// Упаковывает mapp/ в ZIP для релиза: MiniAppHub-<id>-<version>.zip + app.json (метаданные для каталога).
import { readFileSync, mkdirSync, rmSync, cpSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const m = JSON.parse(readFileSync('mapp/mapp.manifest.json', 'utf8'));
const out = 'dist';
rmSync(out, { recursive: true, force: true });
mkdirSync(`${out}/pkg`, { recursive: true });
cpSync('mapp', `${out}/pkg`, { recursive: true });
const zip = `${out}/${m.id}-${m.version}.zip`;
execFileSync('zip', ['-qr', '../' + zip.split('/').pop(), '.'], { cwd: `${out}/pkg` });
writeFileSync(`${out}/app.json`, JSON.stringify({ id: m.id, name: m.name, version: m.version, author: m.author, description: m.description, permissions: m.permissions || [], zip: zip.split('/').pop() }, null, 2));
console.log('готово:', zip);
