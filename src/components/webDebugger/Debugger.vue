<template>
  <el-input placeholder="请输入请求URL" v-model="hostURL">
    <template #prepend>
      <el-select v-model="select" placeholder="请选择">
        <el-option label="POST" value="POST"></el-option>
        <el-option label="GET" value="GET"></el-option>
        <el-option label="PUT" value="PUT"></el-option>
        <el-option label="DELETE" value="DELETE"></el-option>
      </el-select>
    </template>
    <template #append>
      <el-button icon="el-icon-search" style="width: 80px"></el-button>
    </template>
  </el-input>
  <div class="warp">
    <el-tabs tab-position="top" class="tabs-warp">
      <el-tab-pane label="Params">Params</el-tab-pane>
      <el-tab-pane label="Authorization">Authorization</el-tab-pane>
      <el-tab-pane label="Headers">Headers</el-tab-pane>
      <el-tab-pane label="Body">Body</el-tab-pane>
      <el-tab-pane label="Setting">Setting</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style >
.warp .el-tabs__nav-wrap::after {
  width: 0;
  height: 0;
}
.el-select .el-input {
  width: 100px;
}
</style>
<style scoped>
</style>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      input1: ref(""),
      input2: ref(""),
      hostURL: ref(""),
      select: ref("POST"),
    };
  },
});
</script>

<style scoped>
.outer {
  display: flex;
}
</style>