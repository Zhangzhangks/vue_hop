import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../components/pages/01.index.vue';
import login from '../components/pages/02.login.vue';
import NotFound from '../components/pages/404Notfound.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: login },
        { path: '/home', component: index },

        { path: '/:pathMatch(.*)*', component: NotFound },
    ]
})

export default router