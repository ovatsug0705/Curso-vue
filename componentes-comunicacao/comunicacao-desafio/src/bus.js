import Vue from 'vue'

export default new Vue({
  methods: {
    setUser(user) {
      this.$emit('userSelected', user);
    },
    onUserSelected(clk) {
      this.$on('userSelected', clk);
    }
  },
})