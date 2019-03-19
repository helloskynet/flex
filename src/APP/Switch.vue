<template>
  <span>
    <a-switch
      :defaultChecked=defaultChecked
      :checked=checked
      @change='onChange'
    />
  </span>
</template>
<script>
export default {
  props: ["name", "defaultChecked", "checked"],
  methods: {
    // 向上广播改变事件包含值和属性名
    onChange(value) {
      this.$emit("my-change", value, this.name);
    }
  }
};
</script>