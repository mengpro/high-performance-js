import Vue from 'vue';
import iView from 'iview';
import App from './App.vue';
import router from './router';
import store from './store';
import 'iview/dist/styles/iview.css';
import iViewShim from './utils/iview-shim';
import '@/common/styles/main.scss';

Vue.config.productionTip = false;
Vue.use(iView, {
    transfer: true,
});
iViewShim();

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
