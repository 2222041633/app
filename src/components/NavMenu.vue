<template>
  <el-menu
    @select="handleSelect"
    :collapse="true"
    class="outer-menu"
    default-active="Skeleton"
    router
  >
    <el-menu-item index="Skeleton">
      <i class="iconfont el-icon-qingqiu"></i>
      <template #title>网页调试</template>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="iconfont el-icon-jiexijson"></i>
      <template #title>JSON解析</template>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="iconfont el-icon-debugger"></i>
      <template #title>JS调试</template>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="iconfont el-icon-socket"></i>
      <template #title>Socket</template>
    </el-menu-item>
    <el-menu-item index="66">
      <i class="iconfont el-icon-shujujiami"></i>
      <template #title>Socket</template>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="iconfont el-icon-shezhi"></i>
      <template #title>设置</template>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="iconfont el-icon-about"></i>
      <template #title>关于</template>
    </el-menu-item>
  </el-menu>
</template>
<script lang="ts">
export default {
  setup() {
    function handleSelect(key: any, keyPath: any) {
      console.log(key, keyPath);
    }

    return {
      handleSelect,
    };
  },
};
</script>

<style scoped>
.outer-menu {
  height: calc(100vh - 30px);
}
</style>