export function validateEmail(email) {

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true
  }
  return false
}

export function validatePassword(password) {
  var regx = new RegExp(
    '((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&()-+?]).{8,})'
  )
  if (regx.test(password)) {
    return true
  }
  return false
}

