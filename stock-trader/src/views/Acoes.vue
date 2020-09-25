<template>
  <div>
    <h2>Ações</h2>
    <app-cards :isAction="true" :buttonText="'Comprar'"></app-cards>
  </div>
</template>

<script>
import AppCards from "@/components/Cards";

export default {
  components: { AppCards },
};
</script>
