const assert = require('assert');

function cpf(value) {
  assert(value, 'attr \'value\' is required')
  assert(typeof value === 'string', '\'value\' must be string')
  // strip every
  value = value.replace(/[^\w]/g, '')

  const hasNonDigit = value.match(/[^\d]/)
  assert(hasNonDigit === null, '\'cpf\' has some invalid chars')

  assert.deepEqual(value.length, 11, '\'cpf\' invalid size. stripped must be 11 chars');

  let splitted = value.split('');

  // parse each value to int
  splitted = splitted.map((item) => {
    return parseInt(item, 10)
  })

  // digitos
  let digits = []

  // the logic above reference
  // FIRST DIGIT
  // http://www.macoratti.net/alg_cpf.htm
  let sum = 0;
  let count = 10;
  splitted.slice(0,9).forEach((val) => {
    val = val * count
    sum += val
    count--
  })

  let
    div = Math.floor(sum / 11),
    rest = sum % 11

  if (rest < 2) {
      digits.push(0)
  } else {
      digits.push(11 - rest)
  }

  // SECOND DIGIT
  count = 11
  sum = 0
  let splitWithDigit = splitted.slice(0,9)
  splitWithDigit.push(digits[0])
  splitWithDigit.forEach(val => {
    val = val * count
    sum += val
    count--
  })
  div = Math.floor(sum / 11),
  rest = sum % 11

  if (rest < 2) {
      digits.push(0)
  } else {
      digits.push(11 - rest)
  }

  let expected = splitted.slice(0,9).concat(digits)
  assert.deepEqual(expected, splitted, '\'cpf\' is invalid')

}

module.exports = cpf
