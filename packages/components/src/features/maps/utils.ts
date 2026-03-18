export function adjustCenterWithOffset(
  map: google.maps.Map | null | undefined,
  lat: number,
  lng: number,
) {
  if (!map) {
    return;
  }

  const projection = map.getProjection();
  if (!projection) {
    return;
  }

  const mapDiv = map.getDiv();
  const mapWidth = mapDiv.offsetWidth;

  const offsetYPercent = -0.25;
  const xOffset = mapWidth * offsetYPercent;

  const worldPoint = projection.fromLatLngToPoint(new google.maps.LatLng(lat, lng));

  const scale = Math.pow(2, map.getZoom() ?? 0);
  const worldOffset = new google.maps.Point(xOffset / scale, 0);
  if (!worldPoint) {
    return;
  }
  const newCenterPoint = new google.maps.Point(worldPoint.x + worldOffset.x, worldPoint.y);

  const newCenter = projection.fromPointToLatLng(newCenterPoint);
  if (!newCenter) {
    return;
  }

  map.panTo(newCenter);
}
