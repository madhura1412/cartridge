'use strict';
var base = module.superModule;
module.exports = function (object, apiProduct, type) {
    base.call(this,object, apiProduct, type);
     Object.defineProperty(object, 'badge', {
         enumerable: true,
        value: apiProduct.custom.badge
    });
    Object.defineProperty(object, 'ProductViewCount', {
        enumerable: true,
       value: apiProduct.custom.ProductViewCount
   });
};