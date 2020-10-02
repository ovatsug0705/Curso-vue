<template>
  <div>
    <h2>Ações</h2>
    <app-stocks :isAction="true"></app-stocks>
  </div>
</template>

<script>
import AppStocks from "@/components/Stocks";

export default {
  components: { AppStocks }
};
</script>
