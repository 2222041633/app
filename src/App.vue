<template>
  <frame-bar title="bbs.125.la"></frame-bar>
  <div class="warp">
    <nav-menu></nav-menu>
    <div class="router_outer">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>
<script>
import FrameBar from "./components/FrameBar";
import NavMenu from "./components/NavMenu";
export default {
  name: "App",
  components: {
    FrameBar,
    NavMenu,
  },
};
</script>

<style scoped>
.warp {
  display: flex;
  justify-content: flex-start;
}
.router_outer{
  padding: 10px;
  width: calc(100vw - 64px);
}
</style>