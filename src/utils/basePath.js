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

let cachedImageBase = null

/**
 * Full URL base where the app is deployed (origin + path to app root, with trailing slash).
 * Derived from the main script src so it works regardless of pathname or repo name.
 */
function getImageBaseUrl() {
  if (cachedImageBase) return cachedImageBase
  if (typeof document === 'undefined') return ''
  const script = document.querySelector('script[type="module"][src*="assets/"]')
  if (!script || !script.src) {
    cachedImageBase = window.location.origin + '/'
    return cachedImageBase
  }
  try {
    const url = new URL(script.src)
    const path = url.pathname.replace(/\/assets\/[^/]+$/, '/')
    cachedImageBase = url.origin + path
    return cachedImageBase
  } catch {
    cachedImageBase = window.location.origin + '/'
    return cachedImageBase
  }
}

/**
 * Full URL to an image in public/images/. Derived from where the app script loaded,
 * so images work on any route, after navigation, and regardless of repo name/casing.
 * Use for image src: src={getImagePath('azure-ai-icon.png')}
 */
export function getImagePath(filename) {
  const base = getImageBaseUrl()
  return base + 'images/' + filename
}
