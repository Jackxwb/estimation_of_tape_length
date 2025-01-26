<template>
  <BaseEstimate @sum-val="sum" :err-text="errText" :input-data-template="inputDataTemplate" :result="result" />
</template>
<script>
import BaseEstimate from "@/components/BaseEstimate.vue";
import Arithmetic from "@/util/Arithmetic.js";

export default {
  name: "CountTheThicknessYourself",
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
        ,{name:"storeyNumber", displayName: "层数", type:"number", unit:"层", defVal: ""}
      ],

      result: {
        lengthResult:{
          val: 0,
          unix: "mm"
        },
        singleLayerThicknessResult: {
          val: 0,
          unix: "mm"
        },
      },

      errText: ""
    }
  },
  //方法
  methods: {
    sum: function (data) {
      console.log("CountTheThicknessYourself - inputData", data)
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
      if(!data.storeyNumber){
        this.errText = "参数不全！缺失 storeyNumber 层数"
        return
      }
      data.storeyNumber = Arithmetic.checkType(data.storeyNumber)

      let diameter = data.outerDiameter - data.innerDiameter;
      let singleLayerThickness = diameter / data.storeyNumber;
      // 单侧厚度
      let formatResult = Arithmetic.unixFormat(singleLayerThickness);
      this.result.singleLayerThicknessResult.val = formatResult[0]
      this.result.singleLayerThicknessResult.unix = formatResult[1]

      let result = Arithmetic.sumLength(data.outerDiameter, data.innerDiameter, singleLayerThickness, data.storeyNumber);
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