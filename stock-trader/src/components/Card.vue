<template>
  <li class="card">
    <div class="card__header" :class="{ 'card__header--green': isAction }">
      {{ stock.name }} - Preço: R$ {{ stock.value }}
      <span v-if="!isAction">| Qtde: {{ stock.quant }}</span>
    </div>
    <form class="card__body">
      <input
        class="card__input"
        :class="{ invalid: invalid }"
        @input="validationFn(stock, value)"
        v-model="value"
        min="0"
        type="number"
      />
      <button
        class="card__btn"
        type="submit"
        :class="{ disabled: invalid }"
        :disabled="invalid"
        @click.prevent="submitFn(stock, value)"
      >
        {{ buttonText }}
      </button>
    </form>
  </li>
</template>

<script>
export default {
  data() {
    return {
      value: null
    };
  },
  computed: {
    invalid() {
      return this.validationFn(this.stock, this.value);
    }
  },
  props: {
    stock: {
      required: true
    },
    isAction: {
      type: Boolean,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    validationFn: {
      type: Function,
      reuired: true
    },
    submitFn: {
      type: Function,
      reuired: true
    }
  }
};
</script>

<style scoped lang="stylus">
.card__input {
  font-size: 20px;
  flex-grow: 1;
  margin-right: 16px;

  &.invalid {
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
