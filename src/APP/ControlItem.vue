<template>
  <div class="switch-list-main">
    <div class="switch-list-title">
      {{flex.value}}: <br>
      {{flex.name}}
    </div>
    <!-- 如果是输入框 -->
    <div v-if="flex.isInput">
      <options-input
        :defaultValue=flex.propertyValues.defaultValue
        :precision=flex.propertyValues.precision
        :name=flex.value
        @input-change="inputChange"
      />
    </div>
    <div
      v-else
      class='switch-list-content'
    >
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
        <span>
          <options-switch
            :defaultChecked=item.isDefault
            :name=item.value
            :checked=item.isChecked
            @my-change='onChange'
          />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import OptionsSwitch from "@/app/Switch.vue";
import OptionsInput from "@/app/Input.vue";

export default {
  components: {
    OptionsSwitch,
    OptionsInput
  },
  props: ["flex"],
  methods: {
    /**
     * @description 广播改变事件
     * @param {boolean} value 开关值
     * @param {*} optionName 属性名
     */
    onChange(value, optionName) {
      this.$emit("flex-change", value, optionName, this.flex.value);
    },
    inputChange(value, optionName) {
      //  debugger;
      console.log(value);
      // this.$emit("flex-change", value, optionName, this.flex.value);
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
  > div {
    width: 50%;
  }
  .switch-list-content {
    margin-left: 10px;
    .switch-list-item {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
