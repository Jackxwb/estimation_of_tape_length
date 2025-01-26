<template>
  <div class="modelSelect">
    <div :class="nowSelectModel?.name===model.name?'model nowSelected':'model'" v-for="(model,i) in modelList" :key="i" @click="nowSelectModel=model">{{ model.name }}</div>
  </div>
  <div class="modelRenderingBox">
    <component v-if="nowSelectModel" :is="nowSelectModel?.page" />
  </div>
</template>
<script>
import {markRaw} from "vue";
import GivenSingleLayerThickness from "@/components/givenSingleLayerThickness.vue";
import CountTheThicknessYourself from "@/components/CountTheThicknessYourself.vue";

export default {
  name: "App",
  //引入模块
  components: {CountTheThicknessYourself, GivenSingleLayerThickness},
  //父级传入数据
  props: {
  },
  data() {
    return {
      modelList: [
        {name: "已知单层厚度", page: markRaw(GivenSingleLayerThickness)},
        {name: "自己数厚度", page: markRaw(CountTheThicknessYourself)},
      ],

      nowSelectModel: {},
    }
  },
  //方法
  methods: {},
  //启动事件
  mounted() {
    this.nowSelectModel = this.modelList[0]
  },
  //销毁
  beforeUnmount() {
  }
}
</script>
<style scoped>
/*@import "@/style/App.css";*/
</style>