new Vue({
  el: "#desafio",
  data: {
    name: 'Gustavo',
    age: 20,
    image: 'https://vue.js.org/vue.svg',
  },
  methods: {
    timesAge() {
      return this.age * 3;
    },
    random() {
      return Math.random();
    },
    changeName(evt) {
      return this.name = evt.target.value;
    }
  }
})