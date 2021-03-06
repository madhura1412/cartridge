'use strict';

'use strict';

var server = require('server');
var base = module.superModule;
server.extend(base);

server.get('NotifyProductInStock', function(req, res, next) {
	var CustomObjectMgr = require('dw/object/CustomObjectMgr'); // class provides creating, retrieving, deleting, and searching for custom object
	var Transaction = require('dw/system/Transaction');
	var email = req.querystring.email;
    var pid = req.querystring.pid;
    if (req.currentCustomer.raw.authenticated && req.currentCustomer.profile) {
        email = req.currentCustomer.profile.email;
    }
    var skusObject;
    try {
        var notifyMeCustomObject = CustomObjectMgr.getCustomObject('notifyMe', email);
        Transaction.wrap(function () {
            if (notifyMeCustomObject == null) {
                notifyMeCustomObject = CustomObjectMgr.createCustomObject('notifyMe', email);
                skusObject = [];
            } else {
                skusObject = notifyMeCustomObject.custom.skusObject.split('|');
            }
            if (skusObject.indexOf(pid) > -1) {
                skusObject.push(pid);
            }

            notifyMeCustomObject.custom.skusObject = skusObject.join('|');
        });
        res.json({
            success: true
        });
    } catch (e) {
    	
        res.json({
        	error: e,
            success: false
        });
    }
	next();
	
});

module.exports = server.exports();
