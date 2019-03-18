<template>
  <div>
    主轴方向： flex-direction:
    row(default):
    <a-switch
      v-model="flexDirection.row"
      @change="onChange('flexDirection','row')"
    />
  </div>
</template>
<script>
</script>