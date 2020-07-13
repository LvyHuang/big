import vuex from "vuex"
import Vue from "vue"
import channels from "./channels";

//1.安装
Vue.use(vuex);
var store = new vuex.Store({
    //配置
    modules: {
        channels,
    }
})

export default store;