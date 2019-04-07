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
    <div class="code">container:
      <pre>
{{mainStyleObj}}
      </pre>
    </div>
    <div class="control">控制区：
      <br>
      <el-button @click="changeNum(1)">增加item</el-button>
      <el-button @click="changeNum(-1)">减少item</el-button>容器的属性
      <div class="control-item">
        <ControlItem
          v-for="item in flex"
          :flex="item"
          :key="item.value"
          @flex-change="flexChange"
        />
      </div>
      <br>
    </div>
  </div>
</template>
<script>
import ControlItem from "@/element/ControlItem.vue";
import flexData from "@/data/flex.js";

export default {
  components: {
    ControlItem
  },
  data() {
    return {
      flex: { ...flexData.flex },
      flexItem: { ...flexData.flexItem },
      numBox: 12,
      mainStyleObj: {
        "flex-direction": "row",
        "flex-wrap": "nowrap",
        flexFlow: "flex-direction 和 flex-wrap 简写", // flex-direction 和 flex-wrap 简写
        "justify-content": "flex-start",
        "align-items": "stretch",
        "align-content": "stretch"
      },
      itemObj: {
        order: "2", //项目排列顺序 越小越靠前
        "flex-grow": "0", // 项目放大比例，默认为0 即如果存在剩余空间也不放大
        "flex-shrink": "1", // 项目缩小比例如果空间不足，该项目将会缩小
        "flex-basis": "", // 分配多余空间之前，项目占据的主轴空间,
        flex: "", // flex-grou flex-shrink flex-basis 简写
        "align-self": 2 // 单个项目的对齐方式 可覆盖 align-item
      }
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
      this.numBox += num;
      this.numBox = this.numBox < 1 ? 1 : this.numBox;
      this.numBox = this.numBox > 58 ? 58 : this.numBox;
    }
  }
};
</script>
<style lang='scss'>
html,
body {
  margin: 0;
  padding: 0;
}
.main {
  display: flex;
  flex-wrap: wrap;
  .container {
    display: flex;
    width: 50%;
    height: 300px;
    background: #69c0ff;
    .item {
      background-color: #ffd666;
      border: 1px solid #ff85c0;
    }
  }
  .code {
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
