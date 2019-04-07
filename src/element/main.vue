<template>
  <div>
    <el-container>
      <el-header>
        css的test the header
      </el-header>
      <el-container>
        <el-aside>
          <el-menu>
            <el-submenu index=1>
              <template slot=title>
                <i class="el-icon-menu"></i>
                <span>flex</span>
              </template>
              <el-menu-item index=1-1>容器</el-menu-item>
              <el-menu-item index=1-2>项目</el-menu-item>
            </el-submenu>
            <el-menu-item>
              box-sizing
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <app />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import app from "./App.vue";

export default {
  components: {
    app
  }
};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;

}
</style>
