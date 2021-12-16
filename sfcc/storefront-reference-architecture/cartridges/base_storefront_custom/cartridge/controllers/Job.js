var server = require('server');
server.get('Show',function(req,res,next) {
    var jobScript = require('*/cartridge/scripts/jobs');
    var customDetails = jobScript.Jobs();
    res.render('notifyMail',{customDetails:customDetails});
    next();
});

server.get('WhiteList',function (req,res,next) {
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var Transaction = require('dw/system/Transaction');
    var pid = req.querystring.pid;
    var email = req.remoteAddress;
    if (customer.authenticated) {
        email = req.currentCustomer.raw.profile.email;
    }
    var WhiteListCustomObject = CustomObjectMgr.getCustomObject('WhiteList', email);
    if (empty(WhiteListCustomObject)) {
        Transaction.wrap(function () {
            WhiteListCustomObject = CustomObjectMgr.createCustomObject('WhiteList', email);
            WhiteListCustomObject.custom.ProductId = pid;
          
        });
        res.json({
            success: true
        });
    } else {
        if (email == WhiteListCustomObject.custom.WhiteList) {
            WhiteListCustomObject = CustomObjectMgr.getCustomObject('WhiteList', email);

            if (!empty(WhiteListCustomObject.custom.ProductId)) {
                var notifyEmail = WhiteListCustomObject.custom.ProductId;
                var WhiteListEmail = [pid];
                WhiteListEmail.push(notifyEmail);
                var emailString = WhiteListEmail.toString();
                var emailSplit = emailString.split(',');
                var notifyEmails = emailSplit.filter((item, i, ar) => ar.indexOf(item) === i);
                Transaction.wrap(function () {
                    WhiteListCustomObject.custom.ProductId = notifyEmails.toString();
    
                });
            }else{
                Transaction.wrap(function () {
                    WhiteListCustomObject.custom.ProductId = pid;
    
                });
            }

         
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
})



server.get('Find',function (req,res,next) {
  
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var AllCustomObject = CustomObjectMgr.getAllCustomObjects('WhiteList');
    var email = req.remoteAddress;
    if (customer.authenticated) {
        email = req.currentCustomer.raw.profile.email;
    }
    var customObjectList  = AllCustomObject.asList().toArray();
    var CustomKey;
    for (let index = 0; index < customObjectList.length; index++) {
        var element = customObjectList[index];
         CustomKey=element.custom.WhiteList;  
         if(email==CustomKey){
         var product = element.custom.ProductId.split(',');
    }
    }

res.render('favList',{product:product})
    next();
});


server.get('RemoveFav',function (req,res,next) {
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var AllCustomObject = CustomObjectMgr.getAllCustomObjects('WhiteList');
    var Transaction = require('dw/system/Transaction');
    var pid = req.querystring.pid;
    var email = req.remoteAddress;
    if (customer.authenticated) {
        email = req.currentCustomer.raw.profile.email;
    }
    var customObjectList  = AllCustomObject.asList().toArray();
    var CustomKey;
    for (let index = 0; index < customObjectList.length; index++) {
        var element = customObjectList[index];
         CustomKey=element.custom.WhiteList;  
         if(email==CustomKey){
         var product = element.custom.ProductId.split(',');
         for (var i= 0; i < product.length; i++) {
             var item = product[i];

             if(item==pid){
               var indexValue = product.indexOf(item);
               product.splice(indexValue, 1);
                Transaction.wrap(function () {
                   element.custom.ProductId = product.toString();
                });
                res.render('home/homePage');
             }

         }
    }
    }
    next();
})

module.exports = server.exports();