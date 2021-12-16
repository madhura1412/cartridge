var server = require('server');

server.get(
    'Show',
    server.middleware.https,
    function (req, res, next) {
        var actionUrl = dw.web.URLUtils.url('Details-Handler');
        var detailsForm = server.forms.getForm('details');
        detailsForm.clear();

        res.render('/details/details', {
            actionUrl: actionUrl,
            detailsForm: detailsForm
        });

        next();
    }
);



server.post(
    'Handler',
    server.middleware.https,
    function (req, res, next) {
        var detailsForm = server.forms.getForm('details');
        var continueUrl = dw.web.URLUtils.url('Details-Show');
        
            // var detailsFormObj = {
            //     name:detailsForm.name.value,
            //     email: detailsForm.email.value,
            //     city: detailsForm.city.value,
            //     gender:detailsForm.gender.value
            // }

            // if (detailsForm.valid) {
            //     var Transaction = require('dw/system/Transaction');
            //     var CustomObjectMgr = require('dw/object/CustomObjectMgr');
            //     var getObject = CustomObjectMgr.getCustomObject('TestCustomObj',detailsFormObj.email);
                
            //     if(!empty(getObject)){
            //         res.render('/newsletter/newslettererror',{getObject:getObject});
                       
            //     }
            //   else{
            //     Transaction.wrap(function(){
            //  var customObject = CustomObjectMgr.createCustomObject('TestCustomObj',detailsFormObj.email);
            //     customObject.custom.name = detailsFormObj.name;
            //     customObject.custom.age = detailsFormObj.age;
            //     customObject.custom.email = detailsFormObj.email;
            //     customObject.custom.gender = detailsFormObj.gender;
            //     res.render('/details/detailssuccess', {
            //         continueUrl: continueUrl,
            //         detailsForm: detailsForm,
            //         getObject:getObject
            //     });

            //     });
            
            // }
               
            // }



            if (detailsForm.valid) {
                
                res.render('/details/detailssuccess', {
                    continueUrl: continueUrl,
                    detailsForm: detailsForm
                });
            } else {
                
                res.render('/newsletter/newslettererror', {
                    errorMsg: dw.web.Resource.msg('error.crossfieldvalidation', 'newsletter', null),
                    continueUrl: continueUrl
                });
            }

        next();
    }
);


module.exports = server.exports();