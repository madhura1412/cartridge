'use strict';

var server = require('server');
var errorCust;
var errorAddress;
function getList(cusID) {
    var CustomerMgr = require('dw/customer/CustomerMgr');
    var AddressModel = require('*/cartridge/models/address1');
    var collections = require('*/cartridge/scripts/addScript');
   
    var customer = CustomerMgr.getCustomerByCustomerNumber(cusID);
    if(!empty(customer)){
    var rawAddress = customer.addressBook.getAddresses();

      if(!empty(rawAddress)){
    var addressBook = collections.array(rawAddress, function (rawAddress) {
        var addressModel = new AddressModel(rawAddress);
        return addressModel;
    });
  }else{
    errorAddress = "There is No AddressBook for this Customer";
} 
}else{
    errorCust = "There is Customer on this ID";
}
    return addressBook;

}

var errorMessage;
server.get('Find', function(req,res,next){
    var cusID = req.querystring.cusID;
   var addressBook;
   
   if(cusID){
       addressBook=getList(cusID)
   }else{
       errorMessage = "Please, enter valid CustomerID";
   }
   
    res.render('address', {addressBook:addressBook,errorMessage:errorMessage,
        errorCust:errorCust,errorAddress:errorAddress});

next();
});



module.exports=server.exports()