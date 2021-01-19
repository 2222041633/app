<template>
  <div id="outer">
    <div class="logo">
      <img src="../assets/logo.png" >
    </div>
    <div class="title">{{ title }}</div>
    <div class="item">
      <span @click="min"><i class="iconfont al-icon-min"></i></span>
      <span @click="max"><i class="iconfont al-icon-max"></i></span>
      <span @click="close"><i class="iconfont al-icon-close"></i></span>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { drag } from "../electron/remote";
import { max, min, close, init } from "../electron/renderer";
export default defineComponent({
  props: { title: String },
  setup(props, context) {
    onMounted(() => {
      drag("#outer");
      init()
    });
    return {
      max,
      min,
      close,
    };
  },
});
</script>

<style scoped>
#outer {
  line-height: 30px;
  height: 30px;
  background-color: #202120;
  color: #ccc;
  position: relative;
  -webkit-user-select: none;
}
.logo img{
  height: 18px;
  padding: 6px;
}

.logo,
.title,
.item {
  position: absolute;
  height: 100%;
}
.title {
  width: 100%;
  text-align: center;
  font-size: 12px;
}

.item {
  right: 0;
}
.item span {
  height: 100%;
  padding: 0 12px;
  -webkit-app-region: no-drag;
  display: inline-block;
}

.item span:nth-child(2):hover,
.item span:nth-child(1):hover {
  background-color: #353633;
}
.item span:nth-child(3):hover {
  background-color: #d41223;
}
</style> 