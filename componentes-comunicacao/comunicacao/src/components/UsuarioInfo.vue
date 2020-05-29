<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome de Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do usuário é <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento';

export default {
    // props: ['nome'],
    props: {
        nome: {
            type: String,
            default: 'Anônimo',
            // type: [String, Array],
            // required: true,
            // default: () => {
            //     return parseInt(Math.random(), 10) * 100;
            // }
        },
        reiniciarFn: {
            type: Function
        },
        idade: Number,
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('');
        },
        reiniciarNome() {
            this.nome = 'Pedro';
            this.$emit('nomeMudou', this.nome);
        }
    },
    created() {
        barramento.quandoIdadeMudar(idade => this.idade = idade);
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
