const cpf = require('../src/cpf')
const assert = require('assert')

describe('cpf validator', () => {

  it('some valid cpfs', () => {

    cpf('03006052005')

  })
  it('some non-valid cpfs', () => {

    let call = () => {
      cpf('03006052001')
    }
    assert.throws( call, /'cpf' is invalid/);

  })
  it('some non-value', () => {

    assert.throws( cpf, /attr 'value' is required/);

  })
  it('some invalid char', () => {

    let call = () => {
      cpf('030B605200A')
    }
    assert.throws( call, /'cpf' has some invalid chars/);

  })

})
