module.exports = function wrap(m, n) {
  return n >= 0 ? n % m : (n % m + m) % m
}
