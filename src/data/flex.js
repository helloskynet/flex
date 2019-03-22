export default {
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
      name: "多根轴线对齐方式,只有一根轴线（即flex-wrap:nowrap）时，该属性不起作用。",
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
  flexItem: {
    "order": {
      name: "项目的排列顺序。数值越小越靠前默认为0,整数",
      value: "order",
      isInput: true, // 是否为输入框
      propertyValues: {
        defaultValue: 0, // 默认值
        precision: 0, // 数据精度 即小数位数
      }
    },
    "flex-grow": {
      name: "项目的放大比例。默认为0,即存在剩余空间也不放大",
      value: "flex-grow",
      isInput: true, // 是否为输入框
      propertyValues: {
        defaultValue: 0, // 默认值
        precision: 2, // 数据精度 即小数位数
      },
    },
    "flex-shrink": {
      name: "项目的缩小比例。默认为1,空间不足将会缩小--负值无效",
      value: "flex-shrink",
      isInput: true, // 是否为输入框
      propertyValues: {
        defaultValue: 1, // 默认值
        precision: 2, // 数据精度 即小数位数
      },
    },
  }
}
