<template>
  <transition name="el-zoom-in-center">
    <el-tabs tab-position="left">
      <el-tab-pane label="网页调试">
        <debugger></debugger>
      </el-tab-pane>
      <el-tab-pane label="日志记录">日志记录</el-tab-pane>
      <el-tab-pane label="收藏记录">收藏记录</el-tab-pane>
      <el-tab-pane label="生成易语代码">生成易语代码</el-tab-pane>
    </el-tabs>
  </transition>
</template>


<script lang="ts">
import { showErrorMessage } from "../../electron/remote";
import { defineComponent, getCurrentInstance } from "vue";
import Debugger from "./Debugger.vue";
export default defineComponent({
  setup() {
    const { ctx }: any = getCurrentInstance();
    if (ctx) {
      ctx?.$app?.component("Debugger", Debugger);
    } else {
      showErrorMessage("ctx is a null", "");
    }
    // const prompt = ctx && ctx.$ElMessageBox && ctx.$ElMessageBox.prompt;
    // const message = ctx && ctx.$ElMessage;
    // prompt("请输入要批量的次数", "提示", {
    //   confirmButtonText: "确定",
    //   cancelButtonText: "取消",
    //   inputPattern: /[0-9]*/,
    //   inputErrorMessage: "请输入[0-9]的整数",
    //   inputValue: "1",
    //   roundButton: true,
    // })
    //   .then((r: any) => {
    //     message({
    //       message: r,
    //     });
    //   })
    //   .catch((e: any) => {
    //     message({ message: e });
    //   });
    return {};
  },
});
</script>



<style scoped>
.margin {
  margin-right: 5px;
}
</style>