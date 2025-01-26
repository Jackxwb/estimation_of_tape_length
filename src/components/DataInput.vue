<template>
  <div class="dataInputItem">
    <div class="tag">{{ inputConfig.displayName }}</div>
    <input type="number" v-if="inputConfig.type==='number'" v-bind:value="inData" @change="onValChange">
    <input type="text" v-else v-bind:value="inData" @change="onValChange">
    <span v-if="inputConfig.unit">{{ inputConfig.unit }}</span>
  </div>
</template>
<script>
export default {
  name: "DataInput",
  //引入模块
  components: {},
  //父级传入数据
  props: {
    inData: {
      type: [String, Number],
      default() {
        return ""
      }
    },
    inputConfig: {
      type: Object,
      default() {
        return {
          name: "",
          displayName: "",
          type: "text",
          unit: "mm",
        }
      }
    },
  },
  data() {
    return {}
  },
  //方法
  methods: {
    onValChange: function (ele){
      // onValChange
      this.$emit("onSonValChange", {
        key: this.inputConfig.name,
        val: ele.target.value,
      })
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
@import "@/style/DataInput.scss";
</style>