<template>
  <div>
    <Header></Header>
    <!-- 路由组件的展示 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script type='text/ecmascript-6'>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 请求数据
    this.$store.dispatch("categoryList");
  },
};
</script>

<style scoped lang='less'>
</style>