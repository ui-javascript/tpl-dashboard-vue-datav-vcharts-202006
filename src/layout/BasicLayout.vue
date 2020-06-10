<template>
  <dv-full-screen-container>
    <div class="header pl-4">
      <div style="flex: 2">Header</div>
      <div style="flex: 2">
        <el-tabs v-model="currentTab" @tab-click="handleTabChange">
          <el-tab-pane
            v-for="item in $router.options.routes[0].children"
            :key="item.name"
            :name="item.name"
            :label="item.meta.title"
          />
        </el-tabs>
      </div>
    </div>

    <div class="content">
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
    </div>

  </dv-full-screen-container>
</template>

<script>

export default {
  name: 'BasicLayout',
  data() {
    return {
      router: [],
      currentTab: 'Dashboard'
    }
  },
  watch: {
    // 'currentTab': function (val) {
    //   this.$router.push({
    //     name: val
    //   });
    // },
  },
  mounted() {
    // console.log(this.$router.options.routes[0].children)
  },
  methods: {
    handleTabChange(tab, event) {
      console.log(tab.name)
      console.log(event)

      this.$router.push({
        name: tab.name
      })
    }
  }

}
</script>

<style lang="less" scoped>
  .header {
    height: 50px;
    line-height: 50px;
    // background-color: #fff;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
  }

  .content {
    height: calc(~"100% - 40px");
  }
</style>
