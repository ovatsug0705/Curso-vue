<template>
  <div class="cards">
    <slot></slot>
    <ul class="cards-list">
      <li class="card cards-list__item" v-for="card in cards" :key="card">
        <div class="card__header" :class="{ 'card__header--green': isAction }">
          {{ card }} - (Preço: R$ 0000 <span v-if="!isAction">| Qtde: 0</span>)
        </div>
        <div class="card__body">
          <input class="card__input" min="0" type="number" />
          <button class="card__btn">{{ buttonText }}</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: ["Bmw", "Google", "Apple", "twitter"],
    };
  },
  props: {
    isAction: {
      type: Boolean,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    buttonFunction: {
      type: Function,
      required: true,
    },
  },
  methods: {},
};
</script>

<style scoped lang="stylus">
.cards-list {
  list-style-type: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
}

.cards-list__item {
  margin-bottom: 20px;
}

.card__input {
  font-size: 20px;
  flex-grow: 1;
  margin-right: 16px;
}

.card__header {
  background-color: #23b2fa;
  color: #2b2b2b;
  padding: 20px;
  font-weight: 600;

  &--green {
    background-color: #23fa72;
  }
}

.card__body {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__btn {
  border-radius: 10px;
  padding: 6px 15px;
  background-color: #fff;
  color: #2b2b2b;
  border: 1px solid #2b2b2b;
  font-weight bold

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #2b2b2b;
  }
}
</style>
