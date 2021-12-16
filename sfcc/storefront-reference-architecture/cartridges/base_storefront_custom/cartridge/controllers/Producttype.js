'use strict';

var server = require('server');
server.get('Show',function (req, res, next) {
    var productHelper = require('*/cartridge/scripts/helpers/productHelpers');
 var ProductMgr = require('dw/catalog/ProductMgr');
    var pid = req.querystring.pid;
    var productId = ProductMgr.getProduct(pid);
    var productType = productHelper.getProductType(productId);
    res.render('producttype',{productType:productType})
        next();
    }
);
module.exports = server.exports();