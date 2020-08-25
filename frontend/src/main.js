import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// Temporário
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik1hcmNlbG8gUi4gRmVycmVpcmEiLCJlbWFpbCI6Im1hcmNlbG9AbWFyY2Vsby5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTk4MzU4NzM1LCJleHAiOjE1OTg2MTc5MzV9.mIKX-qoda_qVOmTJVniQMCMrKE2Y3kG6eig6AFzXEHE'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')