/** built on 2011-11-08 */ 
dojo._xdResourceLoaded(function(){ return {  
depends: [["provide", "agsjs.dijit.BasemapControl"] 
,['require','dijit.layout.TabContainer'],['require','dijit.layout.ContentPane'] 
],defineResource: function(dojo) { 
dojo.provide("agsjs.dijit.BasemapControl");dojo.require("dijit._Widget");dojo.require("dijit.layout.TabContainer");dojo.require("dijit.layout.ContentPane");dojo.require("dijit.form.Slider");
dojo.declare("agsjs.dijit.BasemapControl",[dijit._Widget],{maps:null,basemaps:null,_selectedBase:null,constructor:function(a){a=a||{};if(!a.map)throw new Error("no map defined in params for TOC");dojo.mixin(this,a);this._init()},_init:function(){dojo.forEach(this.basemaps,function(a,b){if(a.selected)this._selectedBase=a;a._refs=[];a._bases=[];var c=false;dojo.forEach(a.layers,function(d,h){if(!d.id)d.id="basemap_"+b+"_"+h;d.visible=d.visible||false;if(d.isReference)a._refs.push(d);else{a._bases.push(d);
if(d.visible)c=true}},this);if(!c)a._bases[0].visible=true},this);if(!this._selectedBase){this._selectedBase=this.basemaps[0];this._selectedBase.selected=true}this.map.layerIds.length==0&&this._selectedBase&&this._selectBase(this._selectedBase,true);this.loaded=true;this.onLoad()},postCreate:function(){this._createUI()},_selectBase:function(a,b){if(!(!b&&a==this._selectedBase)){this._removeBaseLayers();this._selectedBase=a;this._addBaseLayers(a._refs);this._addBaseLayers(a._bases)}},_addBaseLayers:function(a){var b=
this._selectedBase,c;dojo.forEach(a,function(d){c=d._layer;if(!c){c=this._createLayer(d);d.layer=c}if(c)if(d.isReference){c._isReference=true;this.map.addLayer(c,this.map.layerIds.length)}else{c._isBaseMap=true;if(c==b._googleLayer||c==b._bingLayer){if(!c._addedToMap){this.map.addLayer(c,0);c._addedToMap=true}if(c==b._googleLayer){c.setMapTypeId(d._subtype);if(d.visible)d.styles?c.setMapStyles(d.styles):c.setMapStyles(null)}c==b._bingLayer&&c.setMapStyle(d._subtype)}else this.map.addLayer(c,0)}},
this)},_removeBaseLayers:function(){var a=this._selectedBase,b=[];dojo.forEach(this.map.layerIds,function(c){c=this.map.getLayer(c);if(c._isBaseMap||c._isReference)b.push(c)},this);b.length>0&&dojo.forEach(b,function(c){try{if(c==a._googleLayer||c==a._bingLayer)c._addedToMap=false;this.map.removeLayer(c)}catch(d){console&&console.error(d)}},this)},_createLayer:function(a){var b=null,c=a.type||"ArcGISTiled";if(c.indexOf("GoogleMaps")==0)b=this._createGoogleLayer(a);else if(c.indexOf("BingMaps")==0)b=
this._createBingLayer(a);else switch(c){case "OpenStreetMap":b=new esri.layers.OpenStreetMapLayer(a);break;case "ArcGISTiled":b=new esri.layers.ArcGISTiledMapServiceLayer(a.url,a);break}return b},_createGoogleLayer:function(a){var b=this._selectedBase;if(!(agsjs&&agsjs.layers&&agsjs.layers.GoogleMapsLayer))throw"use dojo.require('agsjs.layers.GoogleMapsLayer') before using this widget";var c={GoogleMapsRoadMap:agsjs.layers.GoogleMapsLayer.MAP_TYPE_ROADMAP,GoogleMapsSatellite:agsjs.layers.GoogleMapsLayer.MAP_TYPE_SATELLITE,
GoogleMapsHybrid:agsjs.layers.GoogleMapsLayer.MAP_TYPE_HYBRID,GoogleMapsTerrain:agsjs.layers.GoogleMapsLayer.MAP_TYPE_TERRAIN}[a.type];a._subtype=c;if(b._googleLayer){if(a.visible){b._googleLayer.setMapTypeId(c);b._googleLayer.show()}}else{b._googleLayer=new agsjs.layers.GoogleMapsLayer(dojo.mixin({mapOptions:{mapTypeId:c}},a));dojo.connect(b._googleLayer,"onStreetViewVisibilityChange",this,function(d){d?esri.hide(this.domNode):esri.show(this.domNode)});this.onGoogleMapsLayerCreate(b._googleLayer)}return b._googleLayer},
onGoogleMapsLayerCreate:function(){},_createBingLayer:function(a){var b=this._selectedBase,c={BingMapsRoad:esri.virtualearth.VETiledLayer.MAP_STYLE_ROAD,BingMapsAerial:esri.virtualearth.VETiledLayer.MAP_STYLE_AERIAL,BingMapsHybrid:esri.virtualearth.VETiledLayer.MAP_STYLE_AERIAL_WITH_LABELS}[a.type];a._subtype=c;if(b._bingLayer){if(a.visible){b._bingLayer.setMapStyle(c);b._bingLayer.show()}}else{if(a.bingMapsKey)this._bingMapsKey=a.bingMapsKey;else a.bingMapsKey=this._bingMapsKey;b._bingLayer=new esri.virtualearth.VETiledLayer(dojo.mixin({mapStyle:c},
a));this.onBingMapsLayerCreate(this._bingLayer)}return b._bingLayer},onBingMapsLayerCreate:function(){},_switchLayer:function(a,b,c){var d=this._selectedBase,h=false;dojo.forEach(d._refs,function(e){if(e.name==a){e.visible=!e.visible;e.layer&&e.layer.setVisibility(e.visible);h=true}},this);if(!h){dojo.forEach(d._bases,function(e){if(e.name!=a&&e.name!=b){e.visible=false;e.layer&&e.layer.hide()}});dojo.forEach(d._bases,function(e){if(e.name==a||e.name==b){var f=e.layer;if(f==d._googleLayer){f.setMapTypeId(e._subtype);
e.styles?f.setMapStyles(e.styles):f.setMapStyles(null);b!=null?f._disableStreetView():f._enableStreetView()}else f==d._bingLayer&&f.setMapStyle(e._subtype);if(!f.visible){f.show();e.visible=true}e.name==a?f.setOpacity(c):f.setOpacity(1-c)}},this)}},onLoad:function(){},_createBasemapUI:function(a){var b=new dijit.layout.ContentPane({title:a.title,selected:a.selected});dojo.forEach(a._refs,function(g){var i;if(dijit.form&&dijit.form.CheckBox){i=new dijit.form.CheckBox({value:g.name,checked:g.visible});
i.placeAt(b.domNode)}else i=dojo.create("input",{type:"checkbox",value:g.name},b.domNode);i.checked=g.visible;b.domNode.appendChild(dojo.doc.createTextNode(g.name))});a._refs.length>0&&dojo.create("br",null,b.domNode);if(a.slider!=undefined){for(var c=a._bases.length,d=c-1,h=d;h>=0;h--)if(a._bases[h].visible){d=h;break}d=dojo.mixin({showButtons:false,style:"width:95%; margin-top:6px",maximum:c-1,value:d},a.slider);var e=[];dojo.forEach(a._bases,function(g){e.push(g.name)});var f={labels:e,container:"bottomDecoration",
count:c,style:"height:0.5em;font-size:75%"};h=dojo.create("div",{},b.domNode);c=new dijit.form.HorizontalRule(f,dojo.create("div",{style:{height:"2px"}},h));f=new dijit.form.HorizontalRuleLabels(f,dojo.create("div",{style:{height:"2px"}},h));d=new dijit.form.HorizontalSlider(d,h);d.startup();c.startup();f.startup();dojo.connect(d,"onChange",this,this._onSliderChanged)}else{var j={};dojo.forEach(a._bases,function(g){if(!j[g.name]){var i=null;if(dijit.form&&dijit.form.RadioButton){i=new dijit.form.RadioButton({name:a.title,
value:g.name,checked:g.visible});i.placeAt(b.domNode)}else{i=dojo.create("input",{type:"radio",name:a.title,value:g.name},b.domNode);i.checked=g.visible}b.domNode.appendChild(dojo.doc.createTextNode(g.name));j[g.name]=i}})}dojo.connect(b,"onClick",this,this._onTabClicked);return b},_createUI:function(){if(this.basemaps.length==1&&this.noTabs){var a=this._createBasemapUI(this.basemaps[0]);dojo.addClass(a.domNode,"dijitTabPaneWrapper");a.domNode.style.borderWidth="1px";a.domNode.style.borderStyle="solid";
a.placeAt(this.domNode);a.startup()}else{var b=new dijit.layout.TabContainer({doLayout:false});this._onTabChangeHandle=dojo.connect(b,"selectChild",this,this._onTabChangeHandler);dojo.forEach(this.basemaps,function(c){c=this._createBasemapUI(c);b.addChild(c)},this);b.placeAt(this.domNode);b.startup()}dojo.addClass(this.domNode,"agsBasemapControl")},_onTabChangeHandler:function(a){dojo.every(this.basemaps,function(b){if(b.title==a.title){this._selectBase(b);return false}return true},this)},_onTabClicked:function(a){a=
a.target;if(a.tagName=="INPUT"){var b=dijit.getEnclosingWidget(a);b&&(b.declaredClass=="dijit.form.CheckBox"||b.declaredClass=="dijit.form.RadioButton")?this._switchLayer(b.value):this._switchLayer(a.value)}},_onSliderChanged:function(a){var b=this._selectedBase._bases,c=Math.floor(a);this._switchLayer(b[c].name,b[Math.min(b.length-1,c+1)].name,1-(a-c))},destroy:function(){dojo.disconnect(this._onTabChangeHandle)}});
}};}); 