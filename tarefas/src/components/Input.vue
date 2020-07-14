<template>
  <div class="input">
    <form @submit.prevent="checkValue()">
      <input v-model="inputValue" required class="input_element" type="text">
      <button type="submit" class="input_btn">+</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    tasks: { type: Array, required: true }
  },
  data() {
    return {
      inputValue: null,
    }
  },
  methods: {
    checkValue() {
      const repeatedItens = this.tasks.filter(elm => elm.name === this.inputValue);
      const repeated = repeatedItens.length <= 0;
      
      if (repeated) this.addItem();
    },
    addItem() {
      this.tasks.push({
        name: this.inputValue,
        pending: true,
      });
    }
  },
}
</script>

<style>

</style>