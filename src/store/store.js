import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout:false,
    userInfo:null,
    token:null,
    selectedRolePermission:{
        roleId:null,
        dataList:[],
    },
  },


  mutations: {
      storeSelectedRolePermission(state,data) { state.selectedRolePermission=data; },
      storeUserToken(state,data) { state.token=data; },
      storeUserInfo(state,data) { state.userInfo=data; },
      changeLayout(state) { state.layout=!state.layout; },
  }
});