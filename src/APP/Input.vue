<template>
  <el-input-number
    :defaultValue=defaultValue
    :min="-1000"
    :max="1000"
    :precision=precision
    @change="inputChange"
  />
</template>
<script>
export default {
  props: ["defaultValue", "precision", "name"],
  methods: {
    inputChange(value) {
      this.$emit("input-change", value, this.name);
    }
  }
};
</script>
