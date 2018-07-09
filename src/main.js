import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    new Vue({
      render: h => h(App)
    }).$mount('#app')
  }
};
app.initialize();