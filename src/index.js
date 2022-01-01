module.exports = function reverse (n) {
  let mod = Math.abs(n)
  return Number(String(mod).split('').reverse().join(''))
}
