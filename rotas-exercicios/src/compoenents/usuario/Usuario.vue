<template>
    <div class="usuario">
        <h2>Usuario</h2>
        <hr>
        <router-view></router-view>
        <button sucesso @click="toStart">Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        toStart() {
            // this.$router.push('/');
            this.$router.push({ path: '/'});
        }
    },
}
</script>

<style>
    
</style>