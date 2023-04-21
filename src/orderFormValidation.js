

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
  if (/^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i.test(fieldInput)) {
    return ''
  } else {
    return 'must be a valid UK postcode'
  }
}

export const checkHasErrors = (errorObject) => Object.keys(errorObject).some((key) => errorObject[key].length > 0)



