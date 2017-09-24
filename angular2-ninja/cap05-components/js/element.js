
var PonyComponentProto = Object.create(HTMLElement.prototype);

PonyComponentProto.createCallback = function() {
    this.innerHTML = '<h1>General Soda</h1>';
};


window.customElements.define('ns-pony', {prototype: PonyComponentProto});
