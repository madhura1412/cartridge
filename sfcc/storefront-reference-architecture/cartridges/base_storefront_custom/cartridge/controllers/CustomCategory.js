'use strict';
var server = require('server');

server.get('Show', function (req, res, next) {
    var CatalogMgr =  require('dw/catalog/CatalogMgr');
    var Categories = require('*/cartridge/models/category');
    var categoryInfo = CatalogMgr.getSiteCatalog().getRoot();

 var topLevelCategories = categoryInfo.hasOnlineSubCategories() ?
 categoryInfo.getOnlineSubCategories() : null;

res.render('catalogProducts', new Categories(topLevelCategories));
    next();
 });  

module.exports=server.exports();