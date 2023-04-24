import { isEmptyInput, hasSpecialCharacters, hasNumbers, invalidPostCode, checkHasErrors } from "./orderFormValidation"

describe('isEmptyInput', () => {
  test('returns error message if the input is empty', () => {
    const result = isEmptyInput('');
    expect(result).toEqual('cannot be empty')
  });

  test('returns empty string if the input is not empty', () => {
    const result = isEmptyInput('Kieren £3');
    expect(result).toEqual('')
  });
})

describe('hasSpecialCharacters', () => {
  test('returns error message if the input contains special characters', () => {
    const result = hasSpecialCharacters('Kieren&');
    expect(result).toEqual('cannot contain special characters')
  });

  test('returns error message if the input contains special characters', () => {
    const result = hasSpecialCharacters('*     ');
    expect(result).toEqual('cannot contain special characters')
  });

  test('returns empty string if the input has no special characters', () => {
    const result = hasSpecialCharacters('Kieren 35');
    expect(result).toEqual('')
  });

  test('returns empty string if the input has no special characters', () => {
    const result = hasSpecialCharacters('');
    expect(result).toEqual('')
  });
})

describe('hasNumbers', () => {
  test('returns error message if the input contains numerals', () => {
    const result = hasNumbers('23 Kieren');
    expect(result).toEqual('cannot contain numbers')
  });

  test('returns error message if the input contains numerals', () => {
    const result = hasNumbers('123456');
    expect(result).toEqual('cannot contain numbers')
  });

  test('returns empty string if the input has no numerals', () => {
    const result = hasNumbers('Kieren McGill');
    expect(result).toEqual('')
  });

  test('returns empty string if the input has no numerals', () => {
    const result = hasNumbers('$  &');
    expect(result).toEqual('')
  });
})

describe('invalidPostCode', () => {
  test('returns error message if the input is not a valid UK postcode', () => {
    const result = invalidPostCode('wert2345');
    expect(result).toEqual('must be a valid UK postcode')
  });

  test('returns error message if the input is not a valid UK postcode', () => {
    const result = invalidPostCode('S2 7JA!');
    expect(result).toEqual('must be a valid UK postcode')
  });

  test('returns empty string if the input is a valid UK postcode', () => {
    const result = invalidPostCode('s5 2SP');
    expect(result).toEqual('')
  });

  test('returns empty string if the input is a valid UK postcode', () => {
    const result = invalidPostCode('PO33 4Jp');
    expect(result).toEqual('')
  });
})

describe('', () => {
  test('no errors, returns false', () => {
    const errors = {
      field1: [],
      field2: [],
    };
    const result = checkHasErrors(errors);
    expect(result).toEqual(false)
  })
})