// Имя репозитория мини-приложения по манифесту: author.app-name -> app-author-app-name.
// Совпадает с тем, что уже принято в организации: headmad.qr-tools -> app-headmad-qr-tools.
/**
 * @param {{ id: string, author: string }} m
 * @returns {string}
 */
export function repoName(m) {
  const id = String(m.id || '').toLowerCase();
  const slug = id.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  if (!slug) throw new Error('из id не получается имя репозитория: ' + m.id);
  return 'app-' + slug;
}

/**
 * Проверяет, что автор манифеста и автор PR — одно лицо.
 * @param {string} manifestAuthor
 * @param {string} prAuthor
 * @returns {boolean}
 */
export function sameAuthor(manifestAuthor, prAuthor) {
  return String(manifestAuthor).toLowerCase() === String(prAuthor).toLowerCase();
}

/** Веб-каталог мини-приложения из манифеста; по умолчанию public. */
/**
 * @param {{ routers?: Record<string, string> }} m
 * @returns {string}
 */
export function webDir(m) {
  const dir = String((m.routers && m.routers.web) || 'public');
  return dir.replace(/^\.?\//, '').replace(/\/+$/, '');
}
