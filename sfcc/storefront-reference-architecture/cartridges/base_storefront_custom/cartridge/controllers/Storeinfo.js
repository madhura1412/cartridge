'use strict';

var server = require('server');
server.get('Show',function (req, res, next) {
    var StoreMgr = require('dw/catalog/StoreMgr');
    var sid = req.querystring.sid;
    var storeInfo = StoreMgr.getStore(sid);
    res.render('storeInfo',{storeInfo:storeInfo})
    next();
}
);

server.get('Start',function (req, res, next) {
 var BasketMgr = require('dw/order/BasketMgr');
 var currentBasket = BasketMgr.getCurrentBasket();
 var CartModel = require('*/cartridge/models/cart');
 var basketModel = new CartModel(currentBasket);
 res.render('basketinfo', basketModel);
 
    next();
}
);

server.get('Find',function (req, res, next) {
    var catalogMgr = require('dw/catalog/CatalogMgr');
    var Categories = require('*/cartridge/models/category');
    var catId = req.querystring.catId;
    var siteRootCategory = catalogMgr.getCategory(catId);
    var topLevelCategories = siteRootCategory.hasOnlineSubCategories() ?
        siteRootCategory.getOnlineSubCategories() : null;
    res.render('categoryDet', new Categories(topLevelCategories));
    next();
}
);

module.exports = server.exports();