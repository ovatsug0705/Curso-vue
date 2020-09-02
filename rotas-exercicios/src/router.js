import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './compoenents/Inicio'
import Usuario from './compoenents/usuario/Usuario'
import UsuarioLista from './compoenents/usuario/UsuarioLista'
import UsuarioDetalhe from './compoenents/usuario/UsuarioDetalhe'
import UsuarioEditar from './compoenents/usuario/UsuarioEditar'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Inicio,
    }, {
        path: '/usuario/',
        component: Usuario,
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true },
            { path: ':id/editar', component: UsuarioEditar, props: true },
        ]
    }]
})