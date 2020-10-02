<template>
  <div class="cards">
    <ul class="cards-list">
      <app-card
        class="cards-list__item"
        v-for="stock in stocks"
        :key="stock.name"
        :isAction="isAction"
        :stock="stock"
        :buttonText="isAction ? 'Comprar' : 'Vender'"
        :validationFn="isAction ? validateAction : validatePortfolio"
        :submitFn="isAction ? submitAction : submitPortfolio"
      ></app-card>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppCard from "@/components/Card";

export default {
  props: {
    isAction: {
      required: true,
      type: Boolean
    }
  },
  components: { AppCard },
  computed: {
    ...mapGetters({
      stocks: "getStocks",
      balance: "getBalance"
    })
  },
  methods: {
    ...mapActions({
      buy: "buy",
      seal: "seal",
      updateStock: "updateStock"
    }),
    validateAction(stk, quant) {
      return stk.value * quant > this.balance;
    },
    validatePortfolio(stk, quant) {
      return quant > stk.quant || quant < 0;
    },
    submitAction(stk, quant) {
      this.buy(stk.value * quant);
      stk.quant += Number(quant);
      this.updateStock(stk);
    },
    submitPortfolio(stk, quant) {
      this.seal(stk.value * quant);
      stk.quant -= Number(quant);
      this.updateStock(stk);
    }
  }
};
</script>

<style lang="stylus">
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
</style>
