module.exports = function reverse (n) {
  let abs = Math.abs(n)
  return Number(String(abs).split('').reverse().join(''))
}
