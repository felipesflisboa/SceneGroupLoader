const ComponentB = cc.Class({
    extends: cc.Component,

    onLoad () {
        let asd = this.node.getComponent(require("CallableAfterAdditiveLoad"));
        this.node.getComponent(require("CallableAfterAdditiveLoad")).eventCallback.push(this.createEvent());
    },

    createEvent(){
        let ret = new cc.Component.EventHandler();
        ret.target = this.node;
        ret.component = ComponentB.name;
        ret.handler = this.onAfterAdditiveLoad.name;
        return ret;
    },

    onAfterAdditiveLoad () {
        cc.log("Programmatically calling a method on scene B after additive load.");
    },
});