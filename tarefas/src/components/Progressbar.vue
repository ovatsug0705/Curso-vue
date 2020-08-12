<template>
  <div class="progress-bar">
    {{ percentage }} %
    <div class="progress-bar_bar" v-bind:style="{ width: percentage + '%' }">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tasks: { type: Array, required: true }
  },
  computed: {
    percentage() {
      const pendings = this.tasks.filter(elm => !elm.pending).length;
      const percent = parseInt((pendings / this.tasks.length * 100), 10) || 0;

      return percent;
    },
  },
}
</script>

<style>
  .progress-bar {
    width: 800px;
    margin: 20px auto;
    border: 2px solid white;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    text-align: center;
  }
  
  .progress-bar_bar {
    text-align: center;
    background-color: green;
    padding: 10px 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: -1;
  }
</style>