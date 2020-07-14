<template>
  <div class="task-list">
    <p class="task-list_text" v-if="tasks.length <= 0">
      Sua vida está em dia :)
    </p>
    <ul class="task-list_list" v-else>
      <li class="task-list_item"  
        v-bind:class="{'complete': !task.pending}" 
        v-for="task in tasks" :key="task.name">
        <span @click="task.pending = !task.pending">{{ task.name }}</span>
        <button @click="removeItem(task.name)" class="close-btn">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tasks: { type: Array, required: true }
  },
  methods: {
    removeItem(name) {
      let index = -1;
      this.tasks.forEach((elm, idx) => (elm.name === name) ? index = idx : null);
      if (index >= 0) this.tasks.splice(index, 1);
    },
  },
}
</script>

<style>
  .task-list_list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    list-style-type: none;
    padding-left: 0;
    margin-top: 30px;
    margin-bottom: 0;
  }

  .task-list_item {
    background-color: red;
    font-size: 20px;
    position: relative;
  }

  .task-list_item.complete {
    background-color: green;
  }

  .task-list_item button {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
    cursor: pointer;
  }

  .task-list_item span {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 50px;
    cursor: pointer;
  }
  
  .task-list_item:not(:last-child) {
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .task-list_text {
    color: #fff;
    font-size: 20px;
    margin-top: 30px;
  }

</style>