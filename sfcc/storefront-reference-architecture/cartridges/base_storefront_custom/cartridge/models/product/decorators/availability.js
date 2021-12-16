'use strict';
var base = module.superModule;
var Resource = require('dw/web/Resource');
function getATSMessage(availabilityModel) {
    var ATS = {};
    ATS.messages = [];
    var inventoryRecord = availabilityModel.inventoryRecord;

    if(inventoryRecord) {
        ATS.messages.push(
            Resource.msgf(
                'label.quantity.in.stock',
                'common',
                null,
                inventoryRecord.ATS.value
            )
        );
    }

    return ATS;
}

module.exports = function (object, quantity, minOrderQuantity, availabilityModel) {

    base.call(this, object, quantity, minOrderQuantity, availabilityModel); 
    Object.defineProperty(object, 'ats', {
        enumerable: true,
        value: getATSMessage(availabilityModel)
    });
};

