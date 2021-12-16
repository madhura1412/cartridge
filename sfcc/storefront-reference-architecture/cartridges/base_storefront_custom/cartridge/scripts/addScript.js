'use strict';



function array(collection, callback, scope) {
    var iterator = Object.hasOwnProperty.call(collection, 'iterator')
        ? collection.iterator()
        : collection;
    var index = 0;
    var item = null;
    var result = [];
    while (iterator.hasNext()) {
        item = iterator.next();
        result.push(scope ? callback.call(scope, item, index, collection)
            : callback(item, index, collection));
        index++;
    }
    return result;
}


module.exports = {
    array: array
};