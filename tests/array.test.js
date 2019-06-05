require('../array.js')

const assert = require('assert')

describe('Array.prototype', () => {
  const arr = [1, 2, 3, 4, 5]

  it('#first() should return array first element', () => {
    assert.equal(arr.first(), 1)
  });

  it('#first(0) should return an empty array', () => {
    assert.deepEqual(arr.first(0), [])
  });

  it("#first(2) should return first two elements", () => {
    assert.deepEqual(arr.first(2), [1, 2])
  })

  it("#first(6) should return the entire array", () => {
    assert.deepEqual(arr.first(6), arr)
  })

  it("#first(-1) should return throw a TypeError", () => {
    assert.throws(() => {
      arr.first(-1)
    }, {
        name: 'TypeError',
        message: 'Negative array size'
      })
  })

  it('#last() should return array last element', () => {
    assert.equal(arr.last(), 5)
  });

  it('#last(0) should return an empty array ', () => {
    assert.deepEqual(arr.last(0), [])
  });

  it("#last(2) should return last two elements", () => {
    assert.deepEqual(arr.last(2), [4, 5])
  })

  it("#last(6) should return the entire array", () => {
    assert.deepEqual(arr.last(6), arr)
  })

  it("#last(-1) should return throw a TypeError", () => {
    assert.throws(() => {
      arr.last(-1)
    }, {
        name: 'TypeError',
        message: 'Negative array size'
      })
  })
});