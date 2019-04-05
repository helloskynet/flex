<template>
  <span>
    <el-switch
      v-model="value"
      @change='onChange'
    />
  </span>
</template>
<script>
export default {
  data() {
    return {
      value: true
    };
  },
  props: ["name", "defaultChecked", "checked"],
  methods: {
    // 向上广播改变事件包含值和属性名
    onChange(value) {
      console.log(value);
      // debugger;
      // this.$emit("my-change", value, this.name);
    }
  }
};
</script>