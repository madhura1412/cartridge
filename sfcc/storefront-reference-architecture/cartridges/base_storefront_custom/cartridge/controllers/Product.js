var server = require('server');

server.extend(module.superModule);
server.append('Show', function (req, res, next) {
    var time = { 'getTime': getTime() }

    var productHelper = require('*/cartridge/scripts/helpers/productHelpers');
    var showProductPageHelperResult = productHelper.showProductPage(req.querystring, req.pageMetaData);

    var currentCustomer = req.currentCustomer.profile;

    var productData = showProductPageHelperResult.product;
    var name;
    var id ;
    if (customer.authenticated) {
        name = currentCustomer.firstName;

        var CustomerMgr = require('dw/customer/CustomerMgr');
        var customerProfile = CustomerMgr.getProfile(currentCustomer.customerNo);
        var Transaction = require('dw/system/Transaction');

        if (!empty(customerProfile.custom.listOfProductsViewed)) {
            var products = customerProfile.custom.listOfProductsViewed;
            var recentProduct = [productData.id];
            recentProduct.push(products);
            var recentView = recentProduct.toString();
            var split = recentView.split(',');

            Transaction.wrap(function () {
                // var view =  removeusingSet(split);

                var recentViewedProducts = split.filter((item, i, ar) => ar.indexOf(item) === i);
                customerProfile.custom.listOfProductsViewed = recentViewedProducts.toString();
            })
        } else {
            Transaction.wrap(function () {
                customerProfile.custom.listOfProductsViewed = productData.id;
            })
        }
    } else {

         id = req.remoteAddress;
    }


    var email;
if(customer.authenticated){
    email =currentCustomer.email;

    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var productCountObject = CustomObjectMgr.getCustomObject('ProductViewCount', productData.id);
    if (empty(productCountObject)) {
        
    
        Transaction.begin();
        
        productCountObject = CustomObjectMgr.createCustomObject('ProductViewCount', productData.id);
            productCountObject.custom.cid = email;
       Transaction.commit();
    
    }else{
        if(productData.id==productCountObject.custom.ProductViewCount){
             productCountObject = CustomObjectMgr.getCustomObject('ProductViewCount', productData.id);
            if(!empty(productCountObject.custom.cid)){
                var productCount = productCountObject.custom.cid;
                var pCountArray = [email];
                pCountArray.push(productCount);
                var pcString = pCountArray.toString();
                var pcSplit = pcString.split(',');
                var pcCustId = pcSplit.filter((item, i, ar) => ar.indexOf(item) === i);
            }
            Transaction.wrap(function () {
                productCountObject.custom.cid = pcCustId.toString();
            });
        }
    }

}

if(customer.authenticated){
var CustomObject = CustomObjectMgr.getAllCustomObjects("ProductViewCount");
var customObjectList  = CustomObject.asList().toArray();
for (let index = 0; index < customObjectList.length; index++) {
var element = customObjectList[index];
var CustomKey = element.custom.ProductViewCount;  
if(CustomKey==productData.id){
var  customCount=element.custom.cid.split(',').length;
}

}
}


    res.render(showProductPageHelperResult.template, {
        name: name,
        customerProfile: customerProfile,
        time: time,
        customCount:customCount,
        id: id, currentCustomer: currentCustomer
    });
    next();
});

// program to remove duplicate value from an array

// function removeusingSet(arr) {
//     let outputArray = Array.from(new Set(arr))
//     return outputArray
//    }

server.get('Custom',function (req,res,next) {
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var CustomObject = CustomObjectMgr.getAllCustomObjects("ProductViewCount");
           var customObjectList  = CustomObject.asList().toArray();
           var CustomKey;
           var customCount;
       for (let index = 0; index < customObjectList.length; index++) {
           var element = customObjectList[index];
           CustomKey=element.custom.ProductViewCount;  
           
          customCount=element.custom.cid.split(',').length;
          
       }

    res.render('notifyerror',{element:CustomKey,customCount:customCount})
    next();
})

function getTime() {
    var currentdate = new Date();
    var datetime = "Current Time: "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    return datetime;
}

server.get('NotifyProductInStock', function (req, res, next) {
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var Transaction = require('dw/system/Transaction');
    var pid = req.querystring.pid;
    var email = req.querystring.email;
    if (customer.authenticated) {
        email = req.currentCustomer.raw.profile.email;
    }
    var notifyMeCustomObject = CustomObjectMgr.getCustomObject('notifyMe', pid);
    if (empty(notifyMeCustomObject)) {
        Transaction.wrap(function () {
            notifyMeCustomObject = CustomObjectMgr.createCustomObject('notifyMe', pid);
            notifyMeCustomObject.custom.productId = pid;
            notifyMeCustomObject.custom.storeproduct = email;
        });
        res.json({
            success: true
        });
    } else {
        if (pid == notifyMeCustomObject.custom.productId) {
            notifyMeCustomObject = CustomObjectMgr.getCustomObject('notifyMe', pid);

            if (!empty(notifyMeCustomObject.custom.storeproduct)) {
                var notifyEmail = notifyMeCustomObject.custom.storeproduct;
                var notifyMeEmail = [email];
                notifyMeEmail.push(notifyEmail);
                var emailString = notifyMeEmail.toString();
                var emailSplit = emailString.split(',');
                var notifyEmails = emailSplit.filter((item, i, ar) => ar.indexOf(item) === i);
            }

            Transaction.wrap(function () {
                notifyMeCustomObject.custom.productId = pid;
                notifyMeCustomObject.custom.storeproduct = notifyEmails.toString();

            });
            res.json({
                success: true
            });
        } else {
            var e;
            res.json({
                error: e,
                success: false
            });
        }
    }
    next();
});


module.exports = server.exports();
