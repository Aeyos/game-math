module.exports = function inRange(p1, p2, distance) {
  const deltaX = p1.x - p2.x;
  const deltaY = p1.y - p2.y;
  
  return (distance * distance) - ((deltaX * deltaX) + (deltaY * deltaY));
}

