/**
 * Base path for the app. Works on both GitHub Pages project URLs (.../repo-name/) and root (user/org site).
 * Use getBasename() for React Router and getImagePath() for image src (relative paths that always resolve).
 */

export function getBasename() {
  if (typeof window === 'undefined') return '/'
  const pathname = window.location.pathname
  const segments = pathname.split('/').filter(Boolean)
  const first = segments[0]
  const appRoutes = ['stages', 'stage']
  if (!first || appRoutes.includes(first)) return '/'
  return '/' + first
}

/**
 * Relative path to an image in public/images/. Works at any route depth and any base URL.
 * Use for image src: src={getImagePath('azure-ai-icon.png')}
 */
export function getImagePath(filename) {
  if (typeof window === 'undefined') return `/images/${filename}`
  const pathname = window.location.pathname
  const segments = pathname.split('/').filter(Boolean)
  const appRoutes = ['stages', 'stage']
  const first = segments[0]
  // How many path segments are "above" the app root (repo name or root)?
  const baseSegmentCount = !first || appRoutes.includes(first) ? 0 : 1
  const depth = Math.max(0, segments.length - baseSegmentCount)
  const prefix = depth === 0 ? '' : '../'.repeat(depth)
  return `${prefix}images/${filename}`
}
