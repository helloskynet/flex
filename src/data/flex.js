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
}
