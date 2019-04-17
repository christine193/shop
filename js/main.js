
import homeComponent from './components/homeComponent.js';
import shopComponent from './components/shopComponent.js';

const routes = [
    { path: '/', redirect: { name: "home" } },
    { path: "/home", name: "home", component: homeComponent },

];

const router = new VueRouter({

    routes

});

const vm = new Vue({

    router: router

}).$mount("#app");