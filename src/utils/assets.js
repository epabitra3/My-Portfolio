/**
 * Returns public URL for an image in the assets folder.
 * Dev: Vite plugin serves root assets/ at /assets. Build: assets copied to dist/assets.
 */
export function img(path) {
  if (!path) return ''
  const p = path.replace(/^\/?assets\/?\/?/, '').replace(/^\//, '')
  return `/assets/${p}`
}
