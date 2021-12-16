var base = module.superModule;
var URLUtils = require('dw/web/URLUtils');
var endpoints = require('*/cartridge/config/oAuthRenentryRedirectEndpoints');
function getLoginRedirectURL(redirectUrl, privacyCache, newlyRegisteredUser) {
    var site=require('dw/system/Site');
    var customValue=site.getCurrent().getCustomPreferenceValue("loginLand");
    if(customValue==true)
    {
        var endpoint = 'Home-Show';
        var result;
        var targetEndPoint = redirectUrl
            ? parseInt(redirectUrl, 10)
            : 1;
    }
    else{
        var endpoint = 'Account-Show';  
    }
    var registered = newlyRegisteredUser ? 'submitted' : 'false';
    var argsForQueryString = privacyCache.get('args');
    if (targetEndPoint && endpoints[targetEndPoint]) {
        endpoint = endpoints[targetEndPoint];
    }
    if (argsForQueryString) {
        result = URLUtils.url(endpoint, 'registration', registered, 'args', argsForQueryString).relative().toString();
    } else {
        result = URLUtils.url(endpoint, 'registration', registered).relative().toString();
    }
    return result;
}
base.getLoginRedirectURL = getLoginRedirectURL;
module.exports = base;