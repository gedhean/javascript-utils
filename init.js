// Must run before all other script

/**
 * @returns first n elements of the array
 */
Array.prototype.first = function (n = 1) {
  if (n < 0) throw new Error('Negative array size')

  if (n === 1) { return this[0] }

  return this.slice(0, n)
}

/**
 * @returns last n elements of the array
 */
Array.prototype.last = function (n = 1) {
  if (n < 0) throw new Error('Negative array size')

  if (n === 1) { return this[this.length - 1] }

  return this.slice(-n)
}