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
import ControlItem from "./ControlItem.vue";

export default {
  components: {
    ControlItem
  },
  data() {
    return {
      flex: {
        "flex-direction": {
          name: "主轴方向", // 名字
          value: "flex-direction",
          propertyValues: {
            row: {
              value: "row", // 属性值
              isDefault: true, // 是否为默认值
              isChecked: true, // 当前是否选中
              key: 1
            },
            "row-reverse": {
              value: "row-reverse",
              isDefault: false,
              isChecked: false,
              key: 2
            },
            column: {
              value: "column",
              isDefault: false,
              isChecked: false,
              key: 3
            },
            "column-reverse": {
              value: "column-reverse",
              isDefault: false,
              isChecked: false,
              key: 4
            }
          }
        },
        "flex-wrap": {
          name: "一条轴线排不下时轴线换行方式",
          value: "flex-wrap",
          propertyValues: {
            nowrap: {
              value: "nowrap", // 属性值
              isDefault: true, // 是否为默认值
              isChecked: true, // 当前是否选中
              key: 1
            },
            wrap: {
              value: "wrap",
              isDefault: false,
              isChecked: false,
              key: 2
            },
            "wrap-reverse": {
              value: "wrap-reverse",
              isDefault: false,
              isChecked: false,
              key: 3
            }
          }
        },
        "justify-content": {
          name: "主轴对齐方式----- space-evenly '(有兼容性问题chrome60+)",
          value: "justify-content",
          propertyValues: {
            "flex-start": {
              value: "flex-start",
              isDefault: true,
              isChecked: true,
              key: 1
            },
            "flex-end": {
              value: "flex-end",
              isDefault: false,
              isChecked: false,
              key: 2
            },
            center: {
              value: "center",
              isDefault: false,
              isChecked: false,
              key: 3
            },
            "space-between": {
              value: "space-between",
              isDefault: false,
              isChecked: false,
              key: 4
            },
            "space-around": {
              value: "space-around",
              isDefault: false,
              isChecked: false,
              key: 5
            },
            "space-evenly": {
              value: "space-evenly",
              isDefault: false,
              isChecked: false,
              key: 6
            }
          }
        },
        "align-items": {
          name: "交叉轴对齐方式,",
          value: "align-items",
          propertyValues: {
            "flex-start": {
              value: "flex-start",
              isDefault: false,
              isChecked: false,
              key: 1
            },
            "flex-end": {
              value: "flex-end",
              isDefault: false,
              isChecked: false,
              key: 2
            },
            center: {
              value: "center",
              isDefault: false,
              isChecked: false,
              key: 3
            },
            baseline: {
              value: "baseline",
              isDefault: false,
              isChecked: false,
              key: 4
            },
            stretch: {
              value: "stretch",
              isDefault: true,
              isChecked: true,
              key: 5
            }
          }
        },
        "align-content": {
          name:
            "多根轴线对齐方式,只有一根轴线（即flex-wrap:nowrap）时，该属性不起作用。",
          value: "align-content",
          propertyValues: {
            "flex-start": {
              value: "flex-start",
              isDefault: false,
              isChecked: false,
              key: 1
            },
            "flex-end": {
              value: "flex-end",
              isDefault: false,
              isChecked: false,
              key: 2
            },
            center: {
              value: "center",
              isDefault: false,
              isChecked: false,
              key: 3
            },
            "space-between": {
              value: "space-between",
              isDefault: false,
              isChecked: false,
              key: 4
            },
            "space-around": {
              value: "space-around",
              isDefault: false,
              isChecked: false,
              key: 5
            },
            stretch: {
              value: "stretch",
              isDefault: true,
              isChecked: true,
              key: 6
            },
            "space-evenly": {
              value: "space-evenly",
              isDefault: false,
              isChecked: false,
              key: 7
            }
          }
        }
      },
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
    background: blue;
    .item {
      background-color: #a5f5a5;
      border: 1px solid red;
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
      background-color: #ffff6a;
    }
  }
}
</style>
