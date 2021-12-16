var base = module.superModule;

function account(currentCustomer, addressModel, orderModel) {
    base.call(this,currentCustomer, addressModel, orderModel);
    this.profile = getProfile(this.profile,currentCustomer.raw.profile);
}


function getProfile(profile,rawProfile) {
   
    if (!empty(profile) && !empty(rawProfile)) {
       
        profile.skill = rawProfile.custom.skill;
        profile.languages = rawProfile.custom.languages;
        profile.age = rawProfile.custom.age;
        profile.address = rawProfile.custom.address;
        profile.jobTitle = rawProfile.jobTitle;
        profile.listOfProductsViewed = rawProfile.custom.listOfProductsViewed;
        
    } 
    return profile;
};
module.exports = account;
