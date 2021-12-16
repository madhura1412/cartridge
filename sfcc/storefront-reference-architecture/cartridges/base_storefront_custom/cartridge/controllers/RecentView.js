var server = require('server');

server.get('View', function (req, res, next) {
    var CustomerMgr = require('dw/customer/CustomerMgr');
    var currentCustomer = req.currentCustomer.profile;
    if (currentCustomer) {
        var customer = CustomerMgr.getProfile(currentCustomer.customerNo);
        var recentViewProductID =  customer.custom.listOfProductsViewed;
        if(!empty(recentViewProductID)){
        var  recentViewProduct = recentViewProductID.split(',');
        }
    }
    res.render('recentViewProduct',{
        recentViewProductID:recentViewProductID,
        customer:customer,
        recentViewProduct:recentViewProduct
    });
    next();
    })

module.exports = server.exports();