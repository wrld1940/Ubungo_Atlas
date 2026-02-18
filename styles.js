// Auto-generated from your QGIS .qml files (singleSymbol renderers)
// Works with Leaflet GeoJSON layers.
//
// Put this file as: atlas/styles.js
//
// IMPORTANT:
// - QML is QGIS-only. The browser can't read QML directly.
// - For SVG markers: copy the referenced SVG files into /icons and keep the same basename
//   e.g. QGIS 'transport/transport_bus_stop.svg' -> web 'icons/transport_bus_stop.svg'
//
// Usage:
//   import getGeoJsonOptions from './styles.js';
//   L.geoJSON(data, getGeoJsonOptions('primary_road')).addTo(map);

const STYLE_DEFS = {
  "primary_school": {
    "type": "text",
    "textIcon": {
      "text": "SCH",
      "fontFamily": "Arial",
      "fontStyle": "Regular",
      "fontSize": 2.0,
      "color": "#174f75",
      "opacity": 1,
      "outlineColor": "#ffffff",
      "outlineOpacity": 1,
      "outlineWidth": 0.01
    }
  },
  "police": {
    "type": "svg",
    "icon": {
      "svgPath": "backgrounds/background_security_02.svg",
      "iconSize": 5.0,
      "color": "#0d1c72",
      "opacity": 1,
      "stroke": "#f7a758",
      "strokeOpacity": 1,
      "strokeWidth": 0.6
    }
  },
  "unclassified_road": {
    "type": "line",
    "style": {
      "color": "#a1a195",
      "weight": 0.46,
      "opacity": 1
    }
  },
  "tertiary_road": {
    "type": "line",
    "style": {
      "color": "#f9b703",
      "weight": 0.66,
      "opacity": 1
    }
  },
  "railway": {
    "type": "line",
    "style": {
      "color": "#000000",
      "weight": 0.6,
      "opacity": 1,
      "dashArray": "1,6"
    }
  },
  "secondary_road": {
    "type": "line",
    "style": {
      "color": "#a96f0b",
      "weight": 0.86,
      "opacity": 1
    }
  },
  "petrol_station": {
    "type": "svg",
    "icon": {
      "svgPath": "gpsicons/gas.svg",
      "iconSize": 3.8,
      "color": "#000000",
      "opacity": 1,
      "stroke": "#ffffff",
      "strokeOpacity": 1,
      "strokeWidth": 0.0
    }
  },
  "hospital": {
    "type": "svg",
    "icon": {
      "svgPath": "health/health_hospital.svg",
      "iconSize": 3.4,
      "color": "#ffffff",
      "opacity": 1,
      "stroke": "#232323",
      "strokeOpacity": 1,
      "strokeWidth": 0.0
    }
  },
  "trunk_road": {
    "type": "line",
    "style": {
      "color": "#8f1317",
      "weight": 1.06,
      "opacity": 1
    }
  },
  "secondary_school": {
    "type": "text",
    "textIcon": {
      "text": "SCH",
      "fontFamily": "Arial",
      "fontStyle": "Regular",
      "fontSize": 2.0,
      "color": "#174f75",
      "opacity": 1,
      "outlineColor": "#ffffff",
      "outlineOpacity": 1,
      "outlineWidth": 0.01
    }
  },
  "primary_road": {
    "type": "line",
    "style": {
      "color": "#e31a1c",
      "weight": 0.86,
      "opacity": 1
    }
  },
  "bus_station": {
    "type": "svg",
    "icon": {
      "svgPath": "transport/transport_bus_stop.svg",
      "iconSize": 2.8,
      "color": "#0d4477",
      "opacity": 1,
      "stroke": "#ffffff",
      "strokeOpacity": 1,
      "strokeWidth": 0.0
    }
  }
};

const MM_TO_PX = 3.78; // 1 mm ≈ 3.78 px at 96 DPI (good enough for web styling)

function basename(path) {
  return (path || '').split('/').pop();
}

function mmToPx(mm) {
  const n = Number(mm);
  return Number.isFinite(n) ? n * MM_TO_PX : mm;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function getVectorStyle(layerKey) {
  const def = STYLE_DEFS[layerKey];
  if (!def) return {};

  if (def.type === 'line') {
    const s = def.style || {};
    return {
      ...s,
      weight: mmToPx(s.weight ?? 1)
    };
  }
  return def.style || {};
}

export function getPointToLayer(layerKey) {
  const def = STYLE_DEFS[layerKey];

  // default
  if (!def) {
    return (feature, latlng) => L.circleMarker(latlng, { radius: 6 });
  }

  // SVG icon (needs the svg in your web folder)
  if (def.type === 'svg') {
    const iconDef = def.icon;
    const url = 'icons/' + basename(iconDef.svgPath); // put SVGs here
    const sizePx = mmToPx(iconDef.iconSize ?? 10);

    const icon = L.icon({
      iconUrl: url,
      iconSize: [sizePx, sizePx],
      iconAnchor: [sizePx / 2, sizePx / 2],
      popupAnchor: [0, -sizePx / 2],
      className: 'atlas-svg-icon'
    });

    return (feature, latlng) => L.marker(latlng, { icon });
  }

  // Text icon (your school QML uses QGIS FontMarker: "SCH")
  if (def.type === 'text') {
    const t = def.textIcon;
    const fontSizePx = mmToPx(t.fontSize ?? 3);
    const text = escapeHtml(t.text ?? '');

    return (feature, latlng) => L.marker(latlng, {
      icon: L.divIcon({
        className: 'atlas-text-icon',
        html: `
          <div class="atlas-text-marker" style="
            font-family:${t.fontFamily || 'Arial'};
            font-size:${fontSizePx}px;
            font-weight:${(t.fontStyle || '').toLowerCase().includes('bold') ? '700' : '600'};
            color:${t.color || '#174f75'};
            -webkit-text-stroke:${mmToPx(t.outlineWidth || 0.3)}px ${t.outlineColor || '#ffffff'};
            text-shadow: 0 1px 2px rgba(0,0,0,0.35);
            transform: translate(-50%, -50%);
            white-space: nowrap;
          ">{text}</div>
        `,
        iconSize: [1, 1],
        iconAnchor: [0, 0]
      })
    });
  }

  // Circle marker fallback
  if (def.type === 'circle') {
    const c = def.circle;
    return (feature, latlng) => L.circleMarker(latlng, {
      ...c,
      radius: mmToPx(c.radius ?? 6),
      weight: mmToPx(c.weight ?? 1)
    });
  }

  return (feature, latlng) => L.circleMarker(latlng, { radius: 6 });
}

export default function getGeoJsonOptions(layerKey) {
  return {
    style: () => getVectorStyle(layerKey),
    pointToLayer: getPointToLayer(layerKey)
  };
}

/* Optional CSS (put in your main CSS file)
.atlas-svg-icon {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.35));
}
.atlas-text-icon {
  background: transparent;
  border: none;
}
*/
