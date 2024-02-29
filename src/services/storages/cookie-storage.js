export function CookieStorage() {
  if (
    typeof document !== 'undefined' &&
    typeof document.cookie !== 'undefined'
  ) {
    return {
      getItem: function (key) {
        const name = key + '='
        const decodedCookie = decodeURIComponent(document.cookie)
        const cookies = decodedCookie.split(';')
        for (let cookie of cookies) {
          cookie = cookie.trim()
          if (cookie.startsWith(name)) {
            return cookie.substring(name.length)
          }
        }
        return null
      },
      setItem: function (key, value, daysToExpire = 365) {
        const date = new Date()
        date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000)
        const expires = 'expires=' + date.toUTCString()
        document.cookie = key + '=' + value + ';' + expires + ';path=/'
      },
      removeItem: function (key) {
        document.cookie =
          key + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      }
    }
  } else {
    throw new Error(
      'Cookie storage is not available in the current environment.'
    )
  }
}
