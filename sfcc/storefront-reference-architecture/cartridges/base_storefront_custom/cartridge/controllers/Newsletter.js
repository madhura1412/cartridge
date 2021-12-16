'use strict';

var server = require('server');

server.get(
    'Show',
    server.middleware.https,
    function (req, res, next) {
        var actionUrl = dw.web.URLUtils.url('Newsletter-Handler');
        var newsletterForm = server.forms.getForm('newsletter');
        newsletterForm.clear();

        res.render('/newsletter/newsletter', {
            actionUrl: actionUrl,
            newsletterForm: newsletterForm
        });
        next();
    }
);
server.post(
    'Handler',
    server.middleware.https,
    function (req, res, next) {
        var newsletterForm = server.forms.getForm('newsletter');
        var continueUrl = dw.web.URLUtils.url('Newsletter-Show');
        
            var newsletterFormObj = {
                name:newsletterForm.name.value,
                email: newsletterForm.email.value,
                age: newsletterForm.age.value,
                gender:newsletterForm.gender.value
            }

            if (newsletterForm.valid) {
                var Transaction = require('dw/system/Transaction');
                var CustomObjectMgr = require('dw/object/CustomObjectMgr');
                var customObject = CustomObjectMgr.getCustomObject('TestCustomObj',newsletterFormObj.email);
                
                if(empty(customObject)){
                    Transaction.wrap(function(){
                         customObject = CustomObjectMgr.createCustomObject('TestCustomObj',newsletterFormObj.email);
                           customObject.custom.name = newsletterFormObj.name;
                           customObject.custom.age = newsletterFormObj.age;
                           customObject.custom.email = newsletterFormObj.email;
                           customObject.custom.gender = newsletterFormObj.gender;
                           });
                           res.render('/newsletter/newslettersuccess', {
                               continueUrl: continueUrl,
                               newsletterForm: newsletterForm,
                               newsletterFormObj:newsletterFormObj
                           });
                       
                }
              else{
               
                    customObject = CustomObjectMgr.getCustomObject('TestCustomObj',newsletterFormObj.email);
                    Transaction.wrap(function(){
                          customObject.custom.name = newsletterFormObj.name;
                          customObject.custom.age = newsletterFormObj.age;
                          });

                res.render('/newsletter/newslettererror',{newsletterFormObj:newsletterFormObj,});
  
            }
               
            }

        next();
    }
);

server.get('Find',function(req,res,next){
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var CustomObject = CustomObjectMgr.getAllCustomObjects("TestCustomObj");
    var getCustomObject = CustomObject.asList().toArray();

    res.render('/newsletter/customobj',{getCustomObject:getCustomObject});
    next();
    
});



module.exports = server.exports();