import Vue from 'vue'
import App from './App'
import store from './store'
import json from './request/api.js'
const msg = (title, duration=1500, mask=false, icon='none')=>{
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
Vue.config.productionTip = false
Vue.prototype.$api = {json,msg}
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
