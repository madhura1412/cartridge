'use strict';

var server = require('server');
server.get('Show',function (req, res, next) {
     var CustomerMgr = require('dw/customer/CustomerMgr');
     var cid = req.querystring.cid;
     var customerInfo = CustomerMgr.getProfile(cid);
     res.render('customerInfo',{customerInfo:customerInfo})
    next();
}
);
module.exports = server.exports();