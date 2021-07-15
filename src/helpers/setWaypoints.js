const setWaypoints = (firstEl, secondEl) => ({
  startDotX: firstEl.right - firstEl.left,
  startDotY: (firstEl.bottom - firstEl.top) / 2,
  endDotX: secondEl.right - secondEl.left,
  endDotY: (secondEl.bottom - secondEl.left) / 2,
});

export default setWaypoints;
