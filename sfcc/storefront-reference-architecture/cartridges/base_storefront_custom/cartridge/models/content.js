var base = module.superModule;

function content(contentValue, renderingTemplate) {
    base.call(this,contentValue, renderingTemplate);
    this.customAttribute = contentValue.custom.contentAttr;   
}

module.exports = content;
