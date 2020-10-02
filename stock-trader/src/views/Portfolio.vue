<template>
  <div>
    <h2>Portifólio</h2>
    <app-stocks :isAction="false"></app-stocks>
  </div>
</template>

<script>
import AppStocks from "@/components/Stocks";

export default {
  components: { AppStocks }
};
</script>
