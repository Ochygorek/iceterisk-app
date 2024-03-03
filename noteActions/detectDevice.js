export function isMobile() {
  if (typeof window === 'undefined') {
    return false; 
  }

  if (/Android|iPhone/i.test(navigator.userAgent) == false) {
    return false;
  }

  const orientation = window.matchMedia('(orientation: portrait)').matches

  if (orientation) {
    return true
  }

  return false
}