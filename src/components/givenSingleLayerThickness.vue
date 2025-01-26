<template>
  <BaseEstimate @sum-val="sum" :err-text="errText" :input-data-template="inputDataTemplate" :result="result" />
</template>
<script>
import BaseEstimate from "@/components/BaseEstimate.vue";
import Arithmetic from "@/util/Arithmetic.js";

export default {
  name: "givenSingleLayerThickness",
  //引入模块
  components: {BaseEstimate},
  //父级传入数据
  props: {
  },
  data() {
    return {
      inputDataTemplate: [
        {name:"outerDiameter", displayName: "外圈直径", type:"number", unit:"mm", defVal: ""}
        ,{name:"innerDiameter", displayName: "内圈直径", type:"number", unit:"mm", defVal: ""}
        ,{name:"singleLayerThickness", displayName: "单层厚度", type:"number", unit:"mm", defVal: ""}
      ],

      result: {
        lengthResult:{
          val: 0,
          unix: "mm"
        },
        storeyResult: {
          val: 0
        },
      },

      errText: ""
    }
  },
  //方法
  methods: {
    sum: function (data) {
      console.log("givenSingleLayerThickness - inputData", data)
      this.errText = "";

      if(!data.outerDiameter){
        this.errText = "参数不全！缺失 outerDiameter 外圈直径"
        return
      }
      data.outerDiameter = Arithmetic.checkType(data.outerDiameter)
      if(!data.innerDiameter){
        this.errText = "参数不全！缺失 innerDiameter 内圈直径"
        return
      }
      data.innerDiameter = Arithmetic.checkType(data.innerDiameter)
      if(!data.singleLayerThickness){
        this.errText = "参数不全！缺失 singleLayerThickness 单层厚度"
        return
      }
      data.singleLayerThickness = Arithmetic.checkType(data.singleLayerThickness)

      let diameter = data.outerDiameter - data.innerDiameter;
      let storey = Math.round(diameter / data.singleLayerThickness);
      this.result.storeyResult.val = storey

      this.result.lengthResult.val = 0;

      let result = Arithmetic.sumLength(data.outerDiameter, data.innerDiameter, data.singleLayerThickness, storey);
      this.result.lengthResult.val = result[0]
      this.result.lengthResult.unix = result[1]
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
/*@import "@/style/givenSingleLayerThickness.css";*/
</style>