import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import About from '@/pages/about.vue'

Vue.use(Router)

export function createRouter () {
    let router = new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
            { path: '/', name: 'index', component: Index },
            { path: '/about', name: 'about', component: About }
        ]
    })

    return router
}
