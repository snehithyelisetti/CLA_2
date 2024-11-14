var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Celltower_1 = new ol.format.GeoJSON();
var features_Celltower_1 = format_Celltower_1.readFeatures(json_Celltower_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Celltower_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Celltower_1.addFeatures(features_Celltower_1);
var lyr_Celltower_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Celltower_1, 
                style: style_Celltower_1,
                popuplayertitle: "Cell tower",
                interactive: true,
                title: '<img src="styles/legend/Celltower_1.png" /> Cell tower'
            });
var format_80mBufferedzone_2 = new ol.format.GeoJSON();
var features_80mBufferedzone_2 = format_80mBufferedzone_2.readFeatures(json_80mBufferedzone_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_80mBufferedzone_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_80mBufferedzone_2.addFeatures(features_80mBufferedzone_2);
var lyr_80mBufferedzone_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_80mBufferedzone_2, 
                style: style_80mBufferedzone_2,
                popuplayertitle: "80m Buffered zone",
                interactive: true,
                title: '<img src="styles/legend/80mBufferedzone_2.png" /> 80m Buffered zone'
            });
var format_Buildings_3 = new ol.format.GeoJSON();
var features_Buildings_3 = format_Buildings_3.readFeatures(json_Buildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_3.addFeatures(features_Buildings_3);
var lyr_Buildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_3, 
                style: style_Buildings_3,
                popuplayertitle: "Buildings",
                interactive: true,
    title: 'Buildings<br />\
    <img src="styles/legend/Buildings_3_0.png" /> Generator1<br />\
    <img src="styles/legend/Buildings_3_1.png" /> Generator2<br />\
    <img src="styles/legend/Buildings_3_2.png" /> Narmada<br />\
    <img src="styles/legend/Buildings_3_3.png" /> Watershed<br />\
    <img src="styles/legend/Buildings_3_4.png" /> Weather Report<br />\
    <img src="styles/legend/Buildings_3_5.png" /> Yamuna<br />\
    <img src="styles/legend/Buildings_3_6.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Celltower_1.setVisible(true);lyr_80mBufferedzone_2.setVisible(true);lyr_Buildings_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Celltower_1,lyr_80mBufferedzone_2,lyr_Buildings_3];
lyr_Celltower_1.set('fieldAliases', {'id': 'id', });
lyr_80mBufferedzone_2.set('fieldAliases', {'id': 'id', });
lyr_Buildings_3.set('fieldAliases', {'name': 'name', });
lyr_Celltower_1.set('fieldImages', {'id': 'TextEdit', });
lyr_80mBufferedzone_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Buildings_3.set('fieldImages', {'name': 'TextEdit', });
lyr_Celltower_1.set('fieldLabels', {'id': 'no label', });
lyr_80mBufferedzone_2.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_Buildings_3.set('fieldLabels', {'name': 'no label', });
lyr_Buildings_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});