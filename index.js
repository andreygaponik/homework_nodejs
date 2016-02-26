var showFullNameModule = require('./module');
var mapModule = require('./map_module');
var _ = require('underscore');


_.each(showFullNameModule.arr, showFullNameModule.showFullName);
_.map(mapModule.arrMap, mapModule.funcMap);

console.log(mapModule.arrMap);