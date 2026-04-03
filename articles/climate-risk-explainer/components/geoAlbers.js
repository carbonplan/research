import { geoAlbers as geoAlbersBase } from 'd3-geo'

const glsl = {
  geoAlbersInvert: `
  float sgn(float x) { return (x > 0.0) ? 1.0 : ((x < 0.0) ? -1.0 : 0.0); }
  vec2 sphRotateInverse(vec2 lonlat, float yawDeg, float pitchDeg) {
  // Inverse of sphRotate
  float lon = radians(lonlat.x), lat = radians(lonlat.y);
  float yaw = radians(yawDeg);
  float pitch = radians(pitchDeg);

  float slat = sin(lat), clat = cos(lat);
  float sp = sin(pitch), cp = cos(pitch);

  float lon1 = atan(clat * sin(lon), clat * cp * cos(lon) + slat * sp) - yaw;

  float slat1 = clamp(slat * cp + clat * sp * cos(lon), -1.0, 1.0);
  float lat1 = asin(slat1);
  return vec2(degrees(lon1), degrees(lat1));
}
  vec2 geoAlbersInvert(float x, float y)
{
  float phi1     = radians(29.5);
  float phi2     = radians(45.5);
  float phi0     = radians(38.7);
  float lambda0  = radians(-0.6);

  float n = 0.5 * (sin(phi1) + sin(phi2));
  float C = pow(cos(phi1), 2.0) + 2.0 * n * sin(phi1);
  float rho0 = sqrt(max(0.0, C - 2.0 * n * sin(phi0))) / n;

  float xr   = x;
  float yr   = rho0 - y;
  float rho  = sgn(n) * sqrt(xr * xr + yr * yr);
  float theta = atan(xr, yr); 


  float lon = lambda0 + theta / n;
  // guard for tiny numeric drift
  float s = (C - pow(rho * n, 2.0)) / (2.0 * n);
  float lat = asin(clamp(s, -1.0, 1.0));

  vec2 lonlat = vec2(degrees(lon), degrees(lat));
  return sphRotateInverse(lonlat, 96.0, 0.0);
}

  `,
}

const geoAlbers = () => {
  const projection = geoAlbersBase().precision(0.1)
  projection.glsl = {
    name: 'geoAlbersInvert',
    func: glsl.geoAlbersInvert,
    nameForward: 'geoAlbers',
    funcForward: glsl.geoAlbers,
  }
  projection.id = 'geoAlbers'
  return projection
}

export default geoAlbers
