new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: '',
        valor3: '',
    },
    methods: {
        showAlert(e) {
            alert('ola marilene');
        },
        updateValue(e) {
            this.valor = e.target.value;
        }
    }
})