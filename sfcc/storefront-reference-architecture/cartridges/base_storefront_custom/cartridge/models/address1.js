'use strict';

function createAddressObject(addressObject) {
    var result;
    if (addressObject) {
        result = {
            address1: addressObject.address1,
            address2: addressObject.address2,
            city: addressObject.city,
            firstName: addressObject.firstName,
            lastName: addressObject.lastName,
        };

    
    } 
    return result;
}

function address(addressObject) {
    this.address = createAddressObject(addressObject);
}

module.exports = address;
