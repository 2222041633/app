<template>
  <div>
    <frame-bar title="bbs.125.la"></frame-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FrameBar from "./FrameBar.vue";
export default defineComponent({
  name: "Home",
  components: {
    FrameBar,
  },
});
</script>