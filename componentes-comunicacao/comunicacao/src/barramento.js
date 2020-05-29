import Vue from 'vue';
export default new Vue({
  methods: {
    alterarIdade(idade) {
      this.$emit('idadeMudou', idade);
    },
    quandoIdadeMudar(clk) {
      this.$on('idadeMudou', clk);
    }
  }
});