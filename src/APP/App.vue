<template>
  <div class="main">
    <div
      :style="mainStyleObj"
      class="container"
    >
      <div
        class="item"
        v-for="item in numBox"
        :style="itemObj"
        :key="item"
      >{{item}}
        <span v-show="item==50">hhhhhhh <br><br><br> hhhhhhhhhhh</span>
      </div>
    </div>
    <div class="control">控制区：
      <br>
      <a-button @click="changeNum(1)">增加item</a-button>
      <a-button @click="changeNum(-1)">减少item</a-button>容器的属性
      <div class="control-item">
        <ControlItem
          v-for="item in flex"
          :flex="item"
          :key="item.value"
          @flex-change="flexChange"
        />
      </div>
    </div>
    <div class="code">container:
      <pre>
{{mainStyleObj}}
      </pre>
    </div>
  </div>
</template>
<script>
import ControlItem from "@/app/ControlItem.vue";
import flexData from "@/data/flex.js";

export default {
  components: {
    ControlItem
  },
  data() {
    return {
      flex: { ...flexData.flex },
      numBox: 12,
      mainStyleObj: {
        "flex-direction": "row",
        "flex-wrap": "nowrap",
        flexFlow: "", // flex-direction 和 flex-wrap 简写
        "justify-content": "flex-start",
        "align-items": "stretch",
        "align-content": "stretch"
      },
      itemObj: {}
    };
  },
  methods: {
    /**
     * @description 保证只有一个开关处于开启状态
     * @param {boolean} value 开关值
     * @param {string} optionValue 属性值
     * @param {string} optionName 属性名字
     */
    flexChange(value, optionValue, optionName) {
      let oValue = optionValue;
      const tempPropertyValues = this.flex[optionName].propertyValues;
      if (value) {
        for (const obj in tempPropertyValues) {
          tempPropertyValues[obj].isChecked = false;
        }
        tempPropertyValues[optionValue].isChecked = true;
      } else {
        tempPropertyValues[optionValue].isChecked = false;
        for (const obj in tempPropertyValues) {
          if (tempPropertyValues[obj].isDefault) {
            tempPropertyValues[obj].isChecked = true;
            oValue = tempPropertyValues[obj].value;
          }
        }
      }
      // 更新属性
      this.mainStyleObj[optionName] = oValue;
    },
    // item 数量
    changeNum(num) {
      console.table(this.flex);
      this.numBox += num;
      this.numBox = this.numBox < 1 ? 1 : this.numBox;
      this.numBox = this.numBox > 58 ? 58 : this.numBox;
    }
  }
};
</script>
<style lang='scss'>
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  .container {
    display: flex;
    width: 50%;
    height: 300px;
    background: #69c0ff;
    .item {
      background-color: #ffd666;
      border: 1px solid #ff85c0;
      // padding: 10px;
    }
  }
  .code,
  .control {
    width: 50%;
  }
  .code {
    background-color: #ff9;
  }
  .control {
    .control-item {
      display: flex;
      flex-wrap: wrap;
      border: 1px dotted #fefefe;
      background-color: #73d13d;
    }
  }
}
</style>
