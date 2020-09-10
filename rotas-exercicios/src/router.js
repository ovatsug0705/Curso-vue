import Vue from 'vue'
import Router from 'vue-router';
import Inicio from './components/Inicio';
// import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router);

const Menu = () => import('./components/template/Menu');
const MenuAlt = () => import('./components/template/MenuAlt');
const notFound = () => import('./components/template/404');
const Usuario = () => import(/* webpackChunkName: "usuario"*/'./components/usuario/Usuario');
const UsuarioLista = () => import(/* webpackChunkName: "usuario"*/'./components/usuario/UsuarioLista');
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario"*/'./components/usuario/UsuarioDetalhe');
const UsuarioEditar = () => import(/* webpackChunkName: "usuario"*/'./components/usuario/UsuarioEditar');

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return { selector: savedPosition }
        } else if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 };
        }
    },
    routes: [{
        name: 'inicio',
        path: '/',
        components:     {
            default: Inicio,
            menu: Menu,
        }
    }, {
        path: '/usuario/',
        components:     {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt,
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter: (to, from, next) => {
                    console.log('Antes da rota de editar');
                    next();
                } },
            { path: ':id/editar', component: UsuarioEditar, props: true,
                name: 'editarUsuario' },
        ]
    }, {
        path: '/nao-encontrado',
        component: notFound,
    }, {
        path: '*',
        redirect: '/nao-encontrado',
    }]
});

router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global');
    next()
})

export default router