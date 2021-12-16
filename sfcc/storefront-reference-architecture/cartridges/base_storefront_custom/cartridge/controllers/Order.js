var server = require('server');
var Resource = require('dw/web/Resource');
server.extend(module.superModule);


server.append(
    'Confirm',
    function (req, res, next) {

        var OrderMgr = require('dw/order/OrderMgr');
      
        var order;


        order = OrderMgr.getOrder(req.form.orderID);
        
   

        
        var Transaction = require('dw/system/Transaction');
        Transaction.wrap(function(){
            order.custom.orderMsg = Resource.msg('label.Successfully','label',null);
        })
      
            res.render('checkout/confirmation/confirmation', {
                orderMgs:order})
          
                next();
    });
module.exports = server.exports();
