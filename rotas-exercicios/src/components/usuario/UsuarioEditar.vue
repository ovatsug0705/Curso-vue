<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <hr>
        <p><strong>Código:</strong> {{ id }} / {{ $route.params.id }}</p>
        <p><strong>Completo:</strong> {{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>Língua:</strong> {{ $route.query.lingua }}</p>
        <hr>
        <button primario @click="confirmou = true">Confirmar</button>
        <div id="rodape">
            <h3>Curse Vue</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
     beforeRouteEnter: (to, from, next) => {
        console.log('dentro do componente -> editar');
        next(vm => console.log('vm', vm.id));
    },
    data() {
        return {
            confirmou: false,
        }
    },
    beforeRouteLeave (to, from, next) {
        if (this.confirmou) {
            next();
        } else {
            if (confirm('Tem certeza?')) next();
            else next(false);
        }
    }
    // data() {
    //     return {
    //         id: this.$route.params.id,
    //     }
    // },
    // watch: {
    //     $route(to, from) {
    //         this.id = to.params.id;
    //     }
    // },
}
</script>

<style>
    #rodape {
        margin-top: 500px;
    }
</style>