import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
// 형제끼리 데이터 통신 event bus

// 새로운 vue인스턴스를 생성하고 내보내
export const  eventBus = new Vue({
    methods: {
        userWasEdited(date) {
            this.$emit("userWasEdited", date)
        }
    }
})


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
