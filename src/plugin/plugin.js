import Vue from "vue";



import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
Vue.component('v-select', vSelect);
import Toaster from 'v-toaster';
import 'v-toaster/dist/v-toaster.css';
Vue.use(Toaster, {timeout: 5000});

import moment from 'moment'
import numeral from "numeral";

import axios from "axios";

import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate);

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
 
// with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
});


const base = axios.create({
  baseURL: "http://localhost/loyelApi/public/api/staff",
  // baseURL: "https://loyeltrade.com/loyelApi/public/api/staff"
});

base.defaults.timeout = 20000;
Vue.prototype.$http = base;
Vue.prototype.$globalProductId = null;



Vue.filter("statusLabel", function(status) {
    if(status==1)
      return 'Active';
    if(status==2)
      return 'Inactive';
    if(status==0)
      return 'Deleted';
});

Vue.filter("filterLookType", function(value) {
  if(value==1)
    return "Mega Category";
  if(value==2)
    return "Sub Category";
  if(value==3)
    return "Normal Category";
});

Vue.filter("yesNo", function(value) {
  if(value==1)
    return 'Yes';
  else
    return 'No';
});
Vue.filter("oldNew", function(value) {
  if(value==1)
    return 'New';
  else
    return 'Old';
});

Vue.filter("formatNumberWithDecimal", function(value) {
  return numeral(value).format(0.0);
});

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY");
  }
});
Vue.filter("formatDateTime", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY hh:mm A");
  }
});

Vue.filter("formatTime", function(value) {
  if (value) {
    return moment(String(value)).format("hh:mm A");
  }
});

Vue.filter("formatYear", function(value) {
  if (value) {
    return moment(String(value)).format("YYYY");
  }
});


// try {
//   window.Popper = require("popper.js").default;
//   window.$ = window.jQuery = require("jquery");
//   require("bootstrap");
// } catch (e) {}

export default {};