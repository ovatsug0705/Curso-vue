<template>
  <div>
    <h2>Portifólio</h2>
    <app-cards :isAction="false" :buttonText="'Vender'"></app-cards>
  </div>
</template>

<script>
import AppCards from "@/components/Cards";

export default {
  components: { AppCards },
};
</script>
