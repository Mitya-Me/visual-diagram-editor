const queryCoordinateElement = (refCurrent) => {
  const coordinatesObj = refCurrent.getBoundingClientRect();

  return {
    left: coordinatesObj.left,
    top: coordinatesObj.top,
    bottom: coordinatesObj.bottom,
    right: coordinatesObj.right,
    width: coordinatesObj.width,
    height: coordinatesObj.height,
  };
};

export default queryCoordinateElement;
