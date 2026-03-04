// styles/styles.js
// Generated from your QGIS QML (QGIS 3.38)
// NOTE: QGIS widths are in mm; converted to px approximately (1mm ≈ 3.78px).

/* -----------------------------
   1) CONTOUR (MultiLineString)
   QML: categorized on "IndexCon" but both categories share same symbol style
-------------------------------- */
function style_contour(feature) {
  return {
    color: "#020507",
    weight: 0.98,   // ~0.26mm
    opacity: 1
    // dashArray: null
  };
}

/* -----------------------------
   2) UBUNGO DISTRIBUTION (MultiPolygon)
   QML: singleSymbol fill
-------------------------------- */
function style_ubungo_distribution(feature) {
  return {
    color: "#232323",
    weight: 0.98,         // ~0.26mm
    opacity: 1,
    fillColor: "#ffffd4",
    fillOpacity: 1
  };
}

/* -----------------------------
   3) UBUNGO DENSITY (MultiPolygon)
   QML: graduated color on "pop_densit"
   Ranges (lower-upper):
   1546.5840 – 2775.7116  -> #ffffd4
   2775.7116 – 5626.7266  -> #fed98e
   5626.7266 – 6976.4192  -> #fe9929
   6976.4192 – 20565.2826 -> #d95f0e
   20565.2826 – 34016.94  -> #993404
-------------------------------- */
function style_ubungo_density(feature) {
  const v = Number(feature?.properties?.pop_densit);

  let fill = "#ffffd4"; // default (lowest)
  if (!Number.isNaN(v)) {
    if (v >= 1546.5840 && v < 2775.7116) fill = "#ffffd4";
    else if (v >= 2775.7116 && v < 5626.7266) fill = "#fed98e";
    else if (v >= 5626.7266 && v < 6976.4192) fill = "#fe9929";
    else if (v >= 6976.4192 && v < 20565.2826) fill = "#d95f0e";
    else if (v >= 20565.2826 && v <= 34016.94) fill = "#993404";
    else if (v > 34016.94) fill = "#993404";
  }

  return {
    color: "#232323",
    weight: 0.98,
    opacity: 1,
    fillColor: fill,
    fillOpacity: 1
  };
}

/* -----------------------------
   4) POPULATION DISTRIBUTION CENTROID (Point)
   QML: graduated size on "population"
   Ranges:
   26215 – 43880.4   radius ≈ 2.27
   43880.4 – 53143   radius ≈ 4.91
   53143 – 81367.8   radius ≈ 7.56
   81367.8 – 114427.4 radius ≈ 10.2
   114427.4 – 145274 radius ≈ 12.85
   Color: fill #834b83, outline #232323
-------------------------------- */
function radius_population(feature) {
  const p = Number(feature?.properties?.population);

  if (Number.isNaN(p)) return 4.91; // fallback
  if (p >= 26215 && p < 43880.4) return 2.27;
  if (p >= 43880.4 && p < 53143) return 4.91;
  if (p >= 53143 && p < 81367.8) return 7.56;
  if (p >= 81367.8 && p < 114427.4) return 10.2;
  if (p >= 114427.4 && p <= 145274) return 12.85;
  if (p > 145274) return 12.85;
  return 4.91;
}

function point_population_centroid(feature, latlng) {
  return L.circleMarker(latlng, {
    radius: radius_population(feature),
    color: "#232323",
    weight: 1,
    opacity: 1,
    fillColor: "#834b83",
    fillOpacity: 1
  });
}
