<template>
  <div id="app">
    <div id="nav">
      <app-menu></app-menu>
    </div>
    <div class="app__ctn">
      <router-view />
    </div>
  </div>
</template>

<script>
import appMenu from "@/components/Menu";

export default {
  components: { appMenu },
};
</script>

<style lang="stylus">
@require "./assets/style/index.styl";

#app {
  color: $color;
  padding-left: 24px;
  padding-right: 24px;
}

.app__ctn {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
