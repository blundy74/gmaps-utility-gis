// This file contains export statements for the lib
// needed as input when compiled as lib. not needed when compiled with apps together.

goog.exportSymbol('gmaps.ags.Util', gmaps.ags.Util);
goog.exportProperty(gmaps.ags.Util, 'getJSON', gmaps.ags.Util.getJSON);
goog.exportProperty(gmaps.ags.Util, 'addToMap', gmaps.ags.Util.addToMap);
goog.exportProperty(gmaps.ags.Util, 'removeFromMap', gmaps.ags.Util.removeFromMap);


goog.exportSymbol('gmaps.ags.Config', gmaps.ags.Config);

goog.exportSymbol('gmaps.ags.SpatialReference', gmaps.ags.SpatialReference);
goog.exportProperty(gmaps.ags.SpatialReference, 'register', gmaps.ags.SpatialReference.register);
goog.exportProperty(gmaps.ags.SpatialReference.prototype, 'forward', gmaps.ags.SpatialReference.prototype.forward);
goog.exportProperty(gmaps.ags.SpatialReference.prototype, 'inverse', gmaps.ags.SpatialReference.prototype.inverse);

goog.exportSymbol('gmaps.ags.Albers', gmaps.ags.Albers);
goog.exportSymbol('gmaps.ags.LambertConformalConic', gmaps.ags.LambertConformalConic);
goog.exportSymbol('gmaps.ags.SphereMercator', gmaps.ags.SphereMercator);
goog.exportSymbol('gmaps.ags.TransverseMercator', gmaps.ags.TransverseMercator);

goog.exportSymbol('gmaps.ags.GeometryType', gmaps.ags.GeometryType);

goog.exportSymbol('gmaps.ags.Catalog', gmaps.ags.Catalog);
goog.exportSymbol('gmaps.ags.Layer', gmaps.ags.Layer);
goog.exportProperty(gmaps.ags.Layer.prototype, 'load', gmaps.ags.Layer.prototype.load);

goog.exportSymbol('gmaps.ags.MapService', gmaps.ags.MapService);
goog.exportProperty(gmaps.ags.MapService.prototype, 'getLayer', gmaps.ags.MapService.prototype.getLayer);
goog.exportProperty(gmaps.ags.MapService.prototype, 'hasLoaded', gmaps.ags.MapService.prototype.hasLoaded);
goog.exportProperty(gmaps.ags.MapService.prototype, 'getInitialBounds', gmaps.ags.MapService.prototype.getInitialBounds);
goog.exportProperty(gmaps.ags.MapService.prototype, 'getLayers', gmaps.ags.MapService.prototype.getLayers);
goog.exportProperty(gmaps.ags.MapService.prototype, 'getTables', gmaps.ags.MapService.prototype.getTables);
goog.exportProperty(gmaps.ags.MapService.prototype, 'exportMap', gmaps.ags.MapService.prototype.exportMap);
goog.exportProperty(gmaps.ags.MapService.prototype, 'identify', gmaps.ags.MapService.prototype.identify);
goog.exportProperty(gmaps.ags.MapService.prototype, 'find', gmaps.ags.MapService.prototype.find);
goog.exportProperty(gmaps.ags.MapService.prototype, 'queryLayer', gmaps.ags.MapService.prototype.queryLayer);



goog.exportSymbol('gmaps.ags.GeocodeService', gmaps.ags.GeocodeService);

goog.exportSymbol('gmaps.ags.GeometryService', gmaps.ags.GeometryService);

goog.exportSymbol('gmaps.ags.GeocodeService', gmaps.ags.GeocodeService);

goog.exportSymbol('gmaps.ags.GPService', gmaps.ags.GPService);

goog.exportSymbol('gmaps.ags.GPTask', gmaps.ags.GPTask);

goog.exportSymbol('gmaps.ags.RouteTask', gmaps.ags.RouteTask);

goog.exportSymbol('gmaps.ags.RouteTask', gmaps.ags.GeocodeService);

goog.exportSymbol('gmaps.ags.Projection', gmaps.ags.Projection);

goog.exportSymbol('gmaps.ags.TileLayer', gmaps.ags.TileLayer);

goog.exportSymbol('gmaps.ags.MapOverlay', gmaps.ags.MapOverlay);

goog.exportSymbol('gmaps.ags.MapType', gmaps.ags.MapType);






