var server = require('server');
server.extend(module.superModule);

server.append('Show', function (req, res, next) {
var CustomerMgr = require('dw/customer/CustomerMgr');
var currentCustomer = req.currentCustomer.profile;

if (customer.authenticated) {
    var customerProfile = CustomerMgr.getProfile(currentCustomer.customerNo);
    var recentViewProductID =  customerProfile.custom.listOfProductsViewed;
   var ProductMgr = require('dw/catalog/ProductMgr');
    if(!empty(recentViewProductID)){
    var  recentViewProduct = recentViewProductID.split(',');
    var element = " ";
    for (var index = 0; index < recentViewProduct.length; index++) {
        element = element+recentViewProduct[index];
        var product = ProductMgr.getProduct(element)
        
    }
    }
}
res.render('home/homePage',{product:product,
    recentViewProduct:recentViewProduct});
next();
})


module.exports = server.exports();
