module.exports = function snapTo(point, snap) {
  return Object.entries(point).reduce((a, v, i) => ({
    ...a,
    [v[0]]: v[1] - (v[1] & ((snap[i] || snap) - 1)),
  }), {});
}
