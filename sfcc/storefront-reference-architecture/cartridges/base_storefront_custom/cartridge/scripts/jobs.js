'use strict';
function Jobs() {
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
        var ProductMgr = require('dw/catalog/ProductMgr');
        var AllCustomObject = CustomObjectMgr.getAllCustomObjects('notifyMe');
        // var customObjectList = AllCustomObject.asList();
        // var customObjectArray = customObjectList.toArray();
        var Transaction = require('dw/system/Transaction');
        // var Site = require('dw/system/Site');
  
      
while (AllCustomObject.hasNext()) {
    var customObjectList = AllCustomObject.next()
             var customKeyValue = customObjectList.custom.notifyMe;
             var product = ProductMgr.getProduct(customKeyValue);
             var productAvailable = product.getAvailabilityModel().inStock;
             var emailHelpers = require('*/cartridge/scripts/helpers/emailHelpers');
             if (productAvailable) {
                 var email = customObjectList.custom.storeproduct;
                    var emailSplit = email.split(',');
                    emailSplit.forEach(element => {    
                 var emailObj = {
                    to: element,
                    subject: 'Product Availablity Notification',
                    from: 'no-reply@testorganization.com', 
                };

         var productInfo ={
                    productId: customKeyValue,
                    productName: product.getName()
                }
            emailHelpers.sendEmail(emailObj, 'notifyMail', {productInfo:productInfo,element:element});           
        });
       
    //     Transaction.wrap(function(){
    //     CustomObjectMgr.remove(item)
    // })     
             }
            }
}
module.exports = {
    Jobs:Jobs
};