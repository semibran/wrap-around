module.exports = function wrap(n, max) {
  return n >= 0 ? n % max : max + n % max
}
