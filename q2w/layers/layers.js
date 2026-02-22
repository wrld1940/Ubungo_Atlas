ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([38.859817, -6.964272, 39.355645, -6.609822]);
var wms_layers = [];

var format_pppppolicemerged_0 = new ol.format.GeoJSON();
var features_pppppolicemerged_0 = format_pppppolicemerged_0.readFeatures(json_pppppolicemerged_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_pppppolicemerged_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pppppolicemerged_0.addFeatures(features_pppppolicemerged_0);
var lyr_pppppolicemerged_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pppppolicemerged_0, 
                style: style_pppppolicemerged_0,
                popuplayertitle: 'pppp police merged',
                interactive: true,
                title: '<img src="styles/legend/pppppolicemerged_0.png" /> pppp police merged'
            });
var format_hspita_1 = new ol.format.GeoJSON();
var features_hspita_1 = format_hspita_1.readFeatures(json_hspita_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_hspita_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hspita_1.addFeatures(features_hspita_1);
var lyr_hspita_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hspita_1, 
                style: style_hspita_1,
                popuplayertitle: 'hspita',
                interactive: true,
                title: '<img src="styles/legend/hspita_1.png" /> hspita'
            });
var format_busstp_2 = new ol.format.GeoJSON();
var features_busstp_2 = format_busstp_2.readFeatures(json_busstp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_busstp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_busstp_2.addFeatures(features_busstp_2);
var lyr_busstp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_busstp_2, 
                style: style_busstp_2,
                popuplayertitle: 'bus stp',
                interactive: true,
                title: '<img src="styles/legend/busstp_2.png" /> bus stp'
            });
var format_Petrolstn_3 = new ol.format.GeoJSON();
var features_Petrolstn_3 = format_Petrolstn_3.readFeatures(json_Petrolstn_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Petrolstn_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Petrolstn_3.addFeatures(features_Petrolstn_3);
var lyr_Petrolstn_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Petrolstn_3, 
                style: style_Petrolstn_3,
                popuplayertitle: 'Petrol stn',
                interactive: true,
                title: '<img src="styles/legend/Petrolstn_3.png" /> Petrol stn'
            });
var format_Primaryroad_4 = new ol.format.GeoJSON();
var features_Primaryroad_4 = format_Primaryroad_4.readFeatures(json_Primaryroad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Primaryroad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primaryroad_4.addFeatures(features_Primaryroad_4);
var lyr_Primaryroad_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primaryroad_4, 
                style: style_Primaryroad_4,
                popuplayertitle: 'Primary road',
                interactive: true,
                title: '<img src="styles/legend/Primaryroad_4.png" /> Primary road'
            });
var format_railway_5 = new ol.format.GeoJSON();
var features_railway_5 = format_railway_5.readFeatures(json_railway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_railway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_5.addFeatures(features_railway_5);
var lyr_railway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railway_5, 
                style: style_railway_5,
                popuplayertitle: 'railway',
                interactive: true,
                title: '<img src="styles/legend/railway_5.png" /> railway'
            });
var format_secondaryroad_6 = new ol.format.GeoJSON();
var features_secondaryroad_6 = format_secondaryroad_6.readFeatures(json_secondaryroad_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_secondaryroad_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_secondaryroad_6.addFeatures(features_secondaryroad_6);
var lyr_secondaryroad_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_secondaryroad_6, 
                style: style_secondaryroad_6,
                popuplayertitle: 'secondary road',
                interactive: true,
                title: '<img src="styles/legend/secondaryroad_6.png" /> secondary road'
            });
var format_Tertiaryroad_7 = new ol.format.GeoJSON();
var features_Tertiaryroad_7 = format_Tertiaryroad_7.readFeatures(json_Tertiaryroad_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Tertiaryroad_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tertiaryroad_7.addFeatures(features_Tertiaryroad_7);
var lyr_Tertiaryroad_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tertiaryroad_7, 
                style: style_Tertiaryroad_7,
                popuplayertitle: 'Tertiary road',
                interactive: true,
                title: '<img src="styles/legend/Tertiaryroad_7.png" /> Tertiary road'
            });
var format_Trunkroad_8 = new ol.format.GeoJSON();
var features_Trunkroad_8 = format_Trunkroad_8.readFeatures(json_Trunkroad_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Trunkroad_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trunkroad_8.addFeatures(features_Trunkroad_8);
var lyr_Trunkroad_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trunkroad_8, 
                style: style_Trunkroad_8,
                popuplayertitle: 'Trunk road',
                interactive: true,
                title: '<img src="styles/legend/Trunkroad_8.png" /> Trunk road'
            });
var format_Unclassified_9 = new ol.format.GeoJSON();
var features_Unclassified_9 = format_Unclassified_9.readFeatures(json_Unclassified_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Unclassified_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unclassified_9.addFeatures(features_Unclassified_9);
var lyr_Unclassified_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unclassified_9, 
                style: style_Unclassified_9,
                popuplayertitle: 'Unclassified',
                interactive: true,
                title: '<img src="styles/legend/Unclassified_9.png" /> Unclassified'
            });
var format_primaryschlshp1_10 = new ol.format.GeoJSON();
var features_primaryschlshp1_10 = format_primaryschlshp1_10.readFeatures(json_primaryschlshp1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_primaryschlshp1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_primaryschlshp1_10.addFeatures(features_primaryschlshp1_10);
var lyr_primaryschlshp1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_primaryschlshp1_10, 
                style: style_primaryschlshp1_10,
                popuplayertitle: 'primary schl.shp 1',
                interactive: true,
                title: '<img src="styles/legend/primaryschlshp1_10.png" /> primary schl.shp 1'
            });
var format_secondaryschools_11 = new ol.format.GeoJSON();
var features_secondaryschools_11 = format_secondaryschools_11.readFeatures(json_secondaryschools_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_secondaryschools_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_secondaryschools_11.addFeatures(features_secondaryschools_11);
var lyr_secondaryschools_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_secondaryschools_11, 
                style: style_secondaryschools_11,
                popuplayertitle: 'secondary schools',
                interactive: true,
                title: '<img src="styles/legend/secondaryschools_11.png" /> secondary schools'
            });

lyr_pppppolicemerged_0.setVisible(true);lyr_hspita_1.setVisible(true);lyr_busstp_2.setVisible(true);lyr_Petrolstn_3.setVisible(true);lyr_Primaryroad_4.setVisible(true);lyr_railway_5.setVisible(true);lyr_secondaryroad_6.setVisible(true);lyr_Tertiaryroad_7.setVisible(true);lyr_Trunkroad_8.setVisible(true);lyr_Unclassified_9.setVisible(true);lyr_primaryschlshp1_10.setVisible(true);lyr_secondaryschools_11.setVisible(true);
var layersList = [lyr_pppppolicemerged_0,lyr_hspita_1,lyr_busstp_2,lyr_Petrolstn_3,lyr_Primaryroad_4,lyr_railway_5,lyr_secondaryroad_6,lyr_Tertiaryroad_7,lyr_Trunkroad_8,lyr_Unclassified_9,lyr_primaryschlshp1_10,lyr_secondaryschools_11];
lyr_pppppolicemerged_0.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'man_made': 'man_made', 'addr_ward': 'addr_ward', 'addr_subwa': 'addr_subwa', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'name_sw': 'name_sw', 'highway': 'highway', 'name_en': 'name_en', 'operator': 'operator', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'wheelchair': 'wheelchair', 'polling_st': 'polling_st', 'opening_ho': 'opening_ho', 'name': 'name', 'internet_a': 'internet_a', 'check_date': 'check_date', 'addr_munic': 'addr_munic', 'addr_distr': 'addr_distr', 'addr_city': 'addr_city', 'type': 'type', 'layer': 'layer', 'path': 'path', });
lyr_hspita_1.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'amenity': 'amenity', 'building': 'building', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'operator_t': 'operator_t', 'capacity_p': 'capacity_p', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'source': 'source', 'name_sw': 'name_sw', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_busstp_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tactile_pa': 'tactile_pa', 'route_ref': 'route_ref', 'name_sw': 'name_sw', 'addr_munic': 'addr_munic', 'addr_distr': 'addr_distr', 'addr_city': 'addr_city', 'addr_landm': 'addr_landm', 'opening_ho': 'opening_ho', 'internet_a': 'internet_a', 'check_date': 'check_date', 'name_fr': 'name_fr', 'noexit': 'noexit', 'wheelchair': 'wheelchair', 'operator': 'operator', 'covered': 'covered', 'name_en': 'name_en', 'shelter': 'shelter', 'lit': 'lit', 'bin': 'bin', 'bench': 'bench', 'public_tra': 'public_tra', 'name': 'name', 'bus': 'bus', 'amenity': 'amenity', });
lyr_Petrolstn_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'self_servi': 'self_servi', 'man_made': 'man_made', 'website': 'website', 'branch': 'branch', 'payment_ut': 'payment_ut', 'descriptio': 'descriptio', 'addr_ward': 'addr_ward', 'addr_subwa': 'addr_subwa', 'operator': 'operator', 'fuel': 'fuel', 'cuisine': 'cuisine', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'fuel_diese': 'fuel_diese', 'fuel_GTL_d': 'fuel_GTL_d', 'fuel_lpg': 'fuel_lpg', 'check_date': 'check_date', 'addr_house': 'addr_house', 'name_en': 'name_en', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'addr_stree': 'addr_stree', 'name': 'name', 'addr_munic': 'addr_munic', 'addr_distr': 'addr_distr', 'addr_city': 'addr_city', });
lyr_Primaryroad_4.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'highway': 'highway', 'surface': 'surface', 'smoothness': 'smoothness', 'width': 'width', 'lanes': 'lanes', 'oneway': 'oneway', 'bridge': 'bridge', 'layer': 'layer', 'source': 'source', 'name_sw': 'name_sw', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_railway_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'service': 'service', 'name': 'name', 'addr_ward': 'addr_ward', 'addr_subwa': 'addr_subwa', 'passenger_': 'passenger_', 'layer': 'layer', 'bridge': 'bridge', 'usage': 'usage', 'gauge': 'gauge', 'electrifie': 'electrifie', });
lyr_secondaryroad_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'embankment': 'embankment', 'junction': 'junction', 'bridge_str': 'bridge_str', 'alt_name': 'alt_name', 'lanes': 'lanes', 'name_sw': 'name_sw', 'name_en': 'name_en', 'maxspeed': 'maxspeed', 'width': 'width', 'layer': 'layer', 'bridge': 'bridge', 'smoothness': 'smoothness', 'lane_marki': 'lane_marki', 'surface': 'surface', 'oneway': 'oneway', 'name': 'name', });
lyr_Tertiaryroad_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'maxspeed_f': 'maxspeed_f', 'tunnel': 'tunnel', 'motorcar': 'motorcar', 'hgv': 'hgv', 'foot': 'foot', 'boundary': 'boundary', 'admin_leve': 'admin_leve', 'vehicle': 'vehicle', 'residentia': 'residentia', 'access': 'access', 'alt_name': 'alt_name', 'check_date': 'check_date', 'source_dat': 'source_dat', 'depth': 'depth', 'covered': 'covered', 'junction': 'junction', 'source_ref': 'source_ref', 'ref': 'ref', 'parking_bo': 'parking_bo', 'parking__1': 'parking__1', 'motor_vehi': 'motor_vehi', 'lit': 'lit', 'cycleway_b': 'cycleway_b', 'check_da_1': 'check_da_1', 'tracktype': 'tracktype', 'noname': 'noname', 'maxspeed_t': 'maxspeed_t', 'motorcycle': 'motorcycle', 'hand_cart': 'hand_cart', 'cycle_rick': 'cycle_rick', 'bicycle': 'bicycle', 'accessibil': 'accessibil', 'official_n': 'official_n', 'maxweight': 'maxweight', 'shoulder': 'shoulder', 'maxweight_': 'maxweight_', 'layer': 'layer', 'bridge': 'bridge', 'lanes': 'lanes', 'sidewalk': 'sidewalk', 'maxspeed': 'maxspeed', 'lane_marki': 'lane_marki', 'width': 'width', 'surface': 'surface', 'smoothness': 'smoothness', 'oneway': 'oneway', 'name': 'name', });
lyr_Trunkroad_8.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'highway': 'highway', 'surface': 'surface', 'smoothness': 'smoothness', 'width': 'width', 'lanes': 'lanes', 'oneway': 'oneway', 'bridge': 'bridge', 'layer': 'layer', 'source': 'source', 'name_sw': 'name_sw', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_Unclassified_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tunnel': 'tunnel', 'maxheight': 'maxheight', 'motor_vehi': 'motor_vehi', 'horse': 'horse', 'boundary': 'boundary', 'admin_leve': 'admin_leve', 'alt_name': 'alt_name', 'vehicle': 'vehicle', 'access': 'access', 'bicycle_ro': 'bicycle_ro', 'supervised': 'supervised', 'junction': 'junction', 'highway_1': 'highway_1', 'sidewalk': 'sidewalk', 'maxspeed': 'maxspeed', 'status': 'status', 'lanes': 'lanes', 'maxspeed_t': 'maxspeed_t', 'unclassifi': 'unclassifi', 'motorcar': 'motorcar', 'hgv': 'hgv', 'bus': 'bus', 'motorcycle': 'motorcycle', 'hand_cart': 'hand_cart', 'cycle_rick': 'cycle_rick', 'bicycle': 'bicycle', 'accessibil': 'accessibil', 'noname': 'noname', 'maxweight_': 'maxweight_', 'layer': 'layer', 'bridge': 'bridge', 'lit': 'lit', 'lane_marki': 'lane_marki', 'source_dat': 'source_dat', 'tracktype': 'tracktype', 'abutters': 'abutters', 'oneway': 'oneway', 'width': 'width', 'smoothness': 'smoothness', 'name': 'name', 'surface': 'surface', });
lyr_primaryschlshp1_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', 'Level': 'Level', 'layer': 'layer', 'path': 'path', });
lyr_secondaryschools_11.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'name_en': 'name_en', 'amenity': 'amenity', 'building': 'building', 'operator_t': 'operator_t', 'capacity_p': 'capacity_p', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'source': 'source', 'name_sw': 'name_sw', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', 'Level': 'Level', 'layer': 'layer', 'path': 'path', });
lyr_pppppolicemerged_0.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'man_made': 'TextEdit', 'addr_ward': 'TextEdit', 'addr_subwa': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'name_sw': 'TextEdit', 'highway': 'TextEdit', 'name_en': 'TextEdit', 'operator': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'wheelchair': 'TextEdit', 'polling_st': 'TextEdit', 'opening_ho': 'TextEdit', 'name': 'TextEdit', 'internet_a': 'TextEdit', 'check_date': 'TextEdit', 'addr_munic': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_city': 'TextEdit', 'type': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_hspita_1.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'building': 'TextEdit', 'healthcare': 'TextEdit', 'healthca_1': 'TextEdit', 'operator_t': 'TextEdit', 'capacity_p': 'TextEdit', 'addr_full': 'TextEdit', 'addr_city': 'TextEdit', 'source': 'TextEdit', 'name_sw': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_busstp_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'tactile_pa': 'TextEdit', 'route_ref': 'TextEdit', 'name_sw': 'TextEdit', 'addr_munic': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_city': 'TextEdit', 'addr_landm': 'TextEdit', 'opening_ho': 'TextEdit', 'internet_a': 'TextEdit', 'check_date': 'TextEdit', 'name_fr': 'TextEdit', 'noexit': 'TextEdit', 'wheelchair': 'TextEdit', 'operator': 'TextEdit', 'covered': 'TextEdit', 'name_en': 'TextEdit', 'shelter': 'TextEdit', 'lit': 'TextEdit', 'bin': 'TextEdit', 'bench': 'TextEdit', 'public_tra': 'TextEdit', 'name': 'TextEdit', 'bus': 'TextEdit', 'amenity': 'TextEdit', });
lyr_Petrolstn_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'self_servi': 'TextEdit', 'man_made': 'TextEdit', 'website': 'TextEdit', 'branch': 'TextEdit', 'payment_ut': 'TextEdit', 'descriptio': 'TextEdit', 'addr_ward': 'TextEdit', 'addr_subwa': 'TextEdit', 'operator': 'TextEdit', 'fuel': 'TextEdit', 'cuisine': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'fuel_diese': 'TextEdit', 'fuel_GTL_d': 'TextEdit', 'fuel_lpg': 'TextEdit', 'check_date': 'TextEdit', 'addr_house': 'TextEdit', 'name_en': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand': 'TextEdit', 'addr_stree': 'TextEdit', 'name': 'TextEdit', 'addr_munic': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_city': 'TextEdit', });
lyr_Primaryroad_4.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'smoothness': 'TextEdit', 'width': 'TextEdit', 'lanes': 'TextEdit', 'oneway': 'TextEdit', 'bridge': 'TextEdit', 'layer': 'TextEdit', 'source': 'TextEdit', 'name_sw': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_railway_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'railway': 'TextEdit', 'service': 'TextEdit', 'name': 'TextEdit', 'addr_ward': 'TextEdit', 'addr_subwa': 'TextEdit', 'passenger_': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'usage': 'TextEdit', 'gauge': 'TextEdit', 'electrifie': 'TextEdit', });
lyr_secondaryroad_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'embankment': 'TextEdit', 'junction': 'TextEdit', 'bridge_str': 'TextEdit', 'alt_name': 'TextEdit', 'lanes': 'TextEdit', 'name_sw': 'TextEdit', 'name_en': 'TextEdit', 'maxspeed': 'TextEdit', 'width': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'lane_marki': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', });
lyr_Tertiaryroad_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'maxspeed_f': 'TextEdit', 'tunnel': 'TextEdit', 'motorcar': 'TextEdit', 'hgv': 'TextEdit', 'foot': 'TextEdit', 'boundary': 'TextEdit', 'admin_leve': 'TextEdit', 'vehicle': 'TextEdit', 'residentia': 'TextEdit', 'access': 'TextEdit', 'alt_name': 'TextEdit', 'check_date': 'TextEdit', 'source_dat': 'TextEdit', 'depth': 'TextEdit', 'covered': 'TextEdit', 'junction': 'TextEdit', 'source_ref': 'TextEdit', 'ref': 'TextEdit', 'parking_bo': 'TextEdit', 'parking__1': 'TextEdit', 'motor_vehi': 'TextEdit', 'lit': 'TextEdit', 'cycleway_b': 'TextEdit', 'check_da_1': 'TextEdit', 'tracktype': 'TextEdit', 'noname': 'TextEdit', 'maxspeed_t': 'TextEdit', 'motorcycle': 'TextEdit', 'hand_cart': 'TextEdit', 'cycle_rick': 'TextEdit', 'bicycle': 'TextEdit', 'accessibil': 'TextEdit', 'official_n': 'TextEdit', 'maxweight': 'TextEdit', 'shoulder': 'TextEdit', 'maxweight_': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'lanes': 'TextEdit', 'sidewalk': 'TextEdit', 'maxspeed': 'TextEdit', 'lane_marki': 'TextEdit', 'width': 'TextEdit', 'surface': 'TextEdit', 'smoothness': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', });
lyr_Trunkroad_8.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'smoothness': 'TextEdit', 'width': 'TextEdit', 'lanes': 'TextEdit', 'oneway': 'TextEdit', 'bridge': 'TextEdit', 'layer': 'TextEdit', 'source': 'TextEdit', 'name_sw': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_Unclassified_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'tunnel': 'TextEdit', 'maxheight': 'TextEdit', 'motor_vehi': 'TextEdit', 'horse': 'TextEdit', 'boundary': 'TextEdit', 'admin_leve': 'TextEdit', 'alt_name': 'TextEdit', 'vehicle': 'TextEdit', 'access': 'TextEdit', 'bicycle_ro': 'TextEdit', 'supervised': 'TextEdit', 'junction': 'TextEdit', 'highway_1': 'TextEdit', 'sidewalk': 'TextEdit', 'maxspeed': 'TextEdit', 'status': 'TextEdit', 'lanes': 'TextEdit', 'maxspeed_t': 'TextEdit', 'unclassifi': 'TextEdit', 'motorcar': 'TextEdit', 'hgv': 'TextEdit', 'bus': 'TextEdit', 'motorcycle': 'TextEdit', 'hand_cart': 'TextEdit', 'cycle_rick': 'TextEdit', 'bicycle': 'TextEdit', 'accessibil': 'TextEdit', 'noname': 'TextEdit', 'maxweight_': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'lit': 'TextEdit', 'lane_marki': 'TextEdit', 'source_dat': 'TextEdit', 'tracktype': 'TextEdit', 'abutters': 'TextEdit', 'oneway': 'TextEdit', 'width': 'TextEdit', 'smoothness': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', });
lyr_primaryschlshp1_10.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'id': 'TextEdit', 'Level': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_secondaryschools_11.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'building': 'TextEdit', 'operator_t': 'TextEdit', 'capacity_p': 'TextEdit', 'addr_full': 'TextEdit', 'addr_city': 'TextEdit', 'source': 'TextEdit', 'name_sw': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'id': 'TextEdit', 'Level': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_pppppolicemerged_0.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'man_made': 'no label', 'addr_ward': 'no label', 'addr_subwa': 'no label', 'payment_de': 'no label', 'payment_cr': 'no label', 'payment_ca': 'no label', 'name_sw': 'no label', 'highway': 'no label', 'name_en': 'no label', 'operator': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'wheelchair': 'no label', 'polling_st': 'no label', 'opening_ho': 'no label', 'name': 'no label', 'internet_a': 'no label', 'check_date': 'no label', 'addr_munic': 'no label', 'addr_distr': 'no label', 'addr_city': 'no label', 'type': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_hspita_1.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'amenity': 'no label', 'building': 'no label', 'healthcare': 'no label', 'healthca_1': 'no label', 'operator_t': 'no label', 'capacity_p': 'no label', 'addr_full': 'no label', 'addr_city': 'no label', 'source': 'no label', 'name_sw': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_busstp_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tactile_pa': 'no label', 'route_ref': 'no label', 'name_sw': 'no label', 'addr_munic': 'no label', 'addr_distr': 'no label', 'addr_city': 'no label', 'addr_landm': 'no label', 'opening_ho': 'no label', 'internet_a': 'no label', 'check_date': 'no label', 'name_fr': 'no label', 'noexit': 'no label', 'wheelchair': 'no label', 'operator': 'no label', 'covered': 'no label', 'name_en': 'no label', 'shelter': 'no label', 'lit': 'no label', 'bin': 'no label', 'bench': 'no label', 'public_tra': 'no label', 'name': 'no label', 'bus': 'no label', 'amenity': 'no label', });
lyr_Petrolstn_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'self_servi': 'no label', 'man_made': 'no label', 'website': 'no label', 'branch': 'no label', 'payment_ut': 'no label', 'descriptio': 'no label', 'addr_ward': 'no label', 'addr_subwa': 'no label', 'operator': 'no label', 'fuel': 'no label', 'cuisine': 'no label', 'payment_de': 'no label', 'payment_cr': 'no label', 'payment_ca': 'no label', 'fuel_diese': 'no label', 'fuel_GTL_d': 'no label', 'fuel_lpg': 'no label', 'check_date': 'no label', 'addr_house': 'no label', 'name_en': 'no label', 'brand_wiki': 'no label', 'brand_wi_1': 'no label', 'brand': 'no label', 'addr_stree': 'no label', 'name': 'no label', 'addr_munic': 'no label', 'addr_distr': 'no label', 'addr_city': 'no label', });
lyr_Primaryroad_4.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'highway': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'width': 'no label', 'lanes': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'layer': 'no label', 'source': 'no label', 'name_sw': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_railway_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'service': 'no label', 'name': 'no label', 'addr_ward': 'no label', 'addr_subwa': 'no label', 'passenger_': 'no label', 'layer': 'no label', 'bridge': 'no label', 'usage': 'no label', 'gauge': 'no label', 'electrifie': 'no label', });
lyr_secondaryroad_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'embankment': 'no label', 'junction': 'no label', 'bridge_str': 'no label', 'alt_name': 'no label', 'lanes': 'no label', 'name_sw': 'no label', 'name_en': 'no label', 'maxspeed': 'no label', 'width': 'no label', 'layer': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'lane_marki': 'no label', 'surface': 'no label', 'oneway': 'no label', 'name': 'no label', });
lyr_Tertiaryroad_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'maxspeed_f': 'no label', 'tunnel': 'no label', 'motorcar': 'no label', 'hgv': 'no label', 'foot': 'no label', 'boundary': 'no label', 'admin_leve': 'no label', 'vehicle': 'no label', 'residentia': 'no label', 'access': 'no label', 'alt_name': 'no label', 'check_date': 'no label', 'source_dat': 'no label', 'depth': 'no label', 'covered': 'no label', 'junction': 'no label', 'source_ref': 'no label', 'ref': 'no label', 'parking_bo': 'no label', 'parking__1': 'no label', 'motor_vehi': 'no label', 'lit': 'no label', 'cycleway_b': 'no label', 'check_da_1': 'no label', 'tracktype': 'no label', 'noname': 'no label', 'maxspeed_t': 'no label', 'motorcycle': 'no label', 'hand_cart': 'no label', 'cycle_rick': 'no label', 'bicycle': 'no label', 'accessibil': 'no label', 'official_n': 'no label', 'maxweight': 'no label', 'shoulder': 'no label', 'maxweight_': 'no label', 'layer': 'no label', 'bridge': 'no label', 'lanes': 'no label', 'sidewalk': 'no label', 'maxspeed': 'no label', 'lane_marki': 'no label', 'width': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'oneway': 'no label', 'name': 'no label', });
lyr_Trunkroad_8.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'highway': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'width': 'no label', 'lanes': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'layer': 'no label', 'source': 'no label', 'name_sw': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_Unclassified_9.set('fieldLabels', {'full_id': 'header label - visible with data', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tunnel': 'no label', 'maxheight': 'no label', 'motor_vehi': 'no label', 'horse': 'no label', 'boundary': 'no label', 'admin_leve': 'no label', 'alt_name': 'no label', 'vehicle': 'no label', 'access': 'no label', 'bicycle_ro': 'no label', 'supervised': 'no label', 'junction': 'no label', 'highway_1': 'no label', 'sidewalk': 'no label', 'maxspeed': 'no label', 'status': 'no label', 'lanes': 'no label', 'maxspeed_t': 'no label', 'unclassifi': 'no label', 'motorcar': 'no label', 'hgv': 'no label', 'bus': 'no label', 'motorcycle': 'no label', 'hand_cart': 'no label', 'cycle_rick': 'no label', 'bicycle': 'no label', 'accessibil': 'no label', 'noname': 'no label', 'maxweight_': 'no label', 'layer': 'no label', 'bridge': 'no label', 'lit': 'no label', 'lane_marki': 'no label', 'source_dat': 'no label', 'tracktype': 'no label', 'abutters': 'no label', 'oneway': 'no label', 'width': 'no label', 'smoothness': 'no label', 'name': 'no label', 'surface': 'no label', });
lyr_primaryschlshp1_10.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'id': 'no label', 'Level': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_secondaryschools_11.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'name_en': 'no label', 'amenity': 'no label', 'building': 'no label', 'operator_t': 'no label', 'capacity_p': 'no label', 'addr_full': 'no label', 'addr_city': 'no label', 'source': 'no label', 'name_sw': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'id': 'no label', 'Level': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_secondaryschools_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});