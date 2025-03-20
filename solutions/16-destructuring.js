const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, point) => {
  if(locations.length === 0) return null;
  const [x2, y2] = point;
  let minDistance = Infinity;
  let place = null;
  for (let location of locations) {
    const[, [x1, y1]] = location;
    const distance = getDistance([x1, y1], [x2, y2]);
    if (distance < minDistance) {
      minDistance = distance;
      place = location;
    }
  }
  return place; 
}

export default getTheNearestLocation;
// END
