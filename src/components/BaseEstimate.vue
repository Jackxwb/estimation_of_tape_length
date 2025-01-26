<template>
  <div class="BaseEstimate">
    <div class="icon">
      <img src="/image.jpg" alt="参数图解">
    </div>
    <div class="textRegion">
      <div class="result" v-if="result.lengthResult">
        <span class="smail">估算长度≈</span>
        <span class="big">{{ result.lengthResult.val }}</span>
        <span class="smail">{{ result.lengthResult.unix }}</span>
      </div>
      <div class="result" v-if="result.storeyResult">
        <span class="smail">估算层数≈</span>
        <span class="big">{{ result.storeyResult.val }}</span>
      </div>
      <div class="result" v-if="result.singleLayerThicknessResult">
        <span class="smail">估算单层厚度≈</span>
        <span class="big">{{ result.singleLayerThicknessResult.val }}</span>
        <span class="smail">{{ result.singleLayerThicknessResult.unix }}</span>
      </div>
      <div class="inputRegion">
        <div class="inputItem">
          <DataInput v-for="(inputDataTemplateItem,i) in inputDataTemplate" :key="i" :input-config="inputDataTemplateItem"  v-bind:in-data="userInputData[inputDataTemplateItem.name]" @onSonValChange="changeInputData" /><!-- @onSonValChange="changeInputData" -->
        </div>
      </div>
      <div class="buttonRegion">
        <button @click="sum">计算</button>
      </div>
      <div class="errText" v-if="errText">
        {{ errText }}
      </div>
    </div>
  </div>
</template>
<script>
import DataInput from "@/components/DataInput.vue";

export default {
  name: "BaseEstimate",
  //引入模块
  components: {DataInput},
  //父级传入数据
  props: {
    inputDataTemplate: Object,
    result: Object,
    errText: String,
  },
  data() {
    return {
      userInputData: {},
    }
  },
  //方法
  methods: {
    changeInputData: function (newData) {
      this.userInputData[newData.key] = newData.val
    },
    sum: function () {
      this.$emit("sum-val", this.userInputData);
    }
  },
  //启动事件
  mounted() {
  },
  //销毁
  beforeUnmount() {
  }
}
</script>
<style scoped>
@import "@/style/BaseEstimate.scss";
</style>