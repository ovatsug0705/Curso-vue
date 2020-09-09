import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './compoenents/Inicio'
import Menu from './compoenents/template/Menu'
import MenuAlt from './compoenents/template/MenuAlt'
import notFound from './compoenents/template/404'
import Usuario from './compoenents/usuario/Usuario'
import UsuarioLista from './compoenents/usuario/UsuarioLista'
import UsuarioDetalhe from './compoenents/usuario/UsuarioDetalhe'
import UsuarioEditar from './compoenents/usuario/UsuarioEditar'

Vue.use(Router)

export default new Router({
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
            { path: ':id', component: UsuarioDetalhe, props: true },
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
})