import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';
import Login from '@/components/Login.vue';  // asumiendo que hicimos este componente
import Home from '@/components/Home.vue';  // asumiendo que hicimos este componente
import Preguntas from '@/components/Preguntas.vue';  // asumiendo que hicimos este componente
import Play from '@/components/Play.vue';  // asumiendo que hicimos este componente


Vue.use(VueRouter);    // instalamos explícitamente el router

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                rutaprotegida: true
            }
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/preguntas',
            component: Preguntas,
            meta: {
                rutaprotegida: true
            }
        },
        {
            path: '/play',
            component: Play,
            meta: {
                rutaprotegida: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log(to, from)
    let currentUser = firebase.auth().currentUser;
    console.log('usuario actual: ', currentUser);
    if (to.meta.requiredAuth && currentUser == null) {
        next('/login')
    } else {
        next()
    }


})
export default router;