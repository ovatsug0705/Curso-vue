<template>
  <div class="home">
    <h1 class="home__title">Stock<span>Trader</span></h1>
    <p class="home__text">Voce pode salvar e carregar os dados</p>
    <p class="home__text">
      Clique em "finalizar o dia" para iniciar um novo dia!
    </p>
    <p class="home__balance">
      <strong>Saldo R$ {{ balance }}</strong>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters({
      balance: "getBalance"
    })
  }
};
</script>

<style scoped lang="stylus">
.home__title {
  text-transform: uppercase;

  span {
    font-weight: 400;
  }
}
</style>
