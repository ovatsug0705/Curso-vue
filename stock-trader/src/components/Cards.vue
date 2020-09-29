<template>
  <div class="cards">
    <slot></slot>
    <ul class="cards-list">
      <li
        class="card cards-list__item"
        v-for="stock in stocks"
        :key="stock.name"
      >
        <div class="card__header" :class="{ 'card__header--green': isAction }">
          {{ stock.name }} - Preço: R$ {{ stock.value }}
          <span v-if="!isAction">| Qtde: {{ stock.quant }}</span>
        </div>
        <div class="card__body">
          <input
            class="card__input"
            :class="{ invalid: invalid }"
            @input="onInput(stock)"
            v-model="value"
            min="0"
            type="number"
          />
          <button
            class="card__btn"
            :class="{ disabled: invalid }"
            :disabled="invalid"
            @click="onSubmit(stock)"
          >
            {{ buttonText }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      value: null,
      invalid: false
    };
  },
  computed: {
    ...mapGetters({
      stocks: "getStocks"
    })
  },
  props: {
    isAction: {
      type: Boolean,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  },
  methods: {
    buyValidate(stk) {
      const original = this.stocks.filter(stock => stock.id == stk.id)[0];
      console.log("original", original);
    },
    onInput(stock) {
      if (this.isAction) this.buyValidate(stock);
      else this.sealValidate(stock);
    },
    onSubmit(stock) {
      console.log("stock", stock);
    }
  },
  mounted() {
    console.log("stocks", this.stocks);
  }
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

  .invalid {
    border-color: #f00;
  }
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
  font-weight: bold;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #2b2b2b;
  }

  &[disabled], &.disabled {
    pointer-events: none;
    opacity: 0.6;
    user-select: none;
  }
}
</style>
