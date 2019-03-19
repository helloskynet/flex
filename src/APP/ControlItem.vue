<template>
  <div class="switch-list-main">
    <span>
      {{flex.value}}: <br>
      内容：<br>
      {{flex.name}}
    </span>
    <div class='switch-list-content'>
      <div
        class="switch-list-item"
        v-for='item in flex.propertyValues'
        :key=item.key
      >
        {{item.value}}
        <span v-if=item.isDefault>
          (default)
        </span>:
        <!-- 定制的开关组件 -->
        <options-switch
          :defaultChecked=item.isDefault
          :name=item.value
          :checked=item.isChecked
          @my-change='onChange'
        />
      </div>
    </div>
  </div>
</template>
<script>
import optionsSwitch from "./Switch.vue";

export default {
  components: {
    optionsSwitch
  },
  props: ["flex"],
  methods: {
    /**
     * @description 广播改变事件
     * @param {boolean} value 开关值
     * @param {*} optionName 属性名
     */
    onChange(value, optionName) {
      this.$emit("ss-change", value, optionName, this.flex.value);
    }
  }
};
</script>
<style lang="scss" scoped>
.switch-list-main {
  display: flex;
  padding: 5px;
  width: 50%;
  justify-content: space-around;
  .switch-list-content {
    margin-left: 10px;
    .switch-list-item {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
