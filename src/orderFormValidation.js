

export const isEmptyInput = (fieldInput) => {
  if (fieldInput === "") {
    return 'cannot be empty'
  } else {
    return ''
  }
}

export const hasSpecialCharacters = (fieldInput) => {
  if (/[$&+,:;=?@#|'<>.^*()%!]/.test(fieldInput)) {
    return 'cannot contain special characters'
  } else {
    return ''
  }
}

export const hasNumbers = (fieldInput) => {
  if (/[0-9]/.test(fieldInput)) {
    return 'cannot contain numbers'
  } else {
    return ''
  }
}

export const invalidPostCode = (fieldInput) => {
  if (!(/^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i.test(fieldInput))) {
    return 'must be a valid UK postcode'
  } else {
    return ''
  }
}

export const checkHasErrors = (errorInputObject) => {
  return Object.keys(errorInputObject).some((key) => errorInputObject[key].length > 0)
}




