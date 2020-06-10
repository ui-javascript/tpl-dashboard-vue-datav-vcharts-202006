<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    background-color: #030409;

    #dv-full-screen-container {
      width: 100%;
      color: #fff;
      height: 100%;
      background-image: url('/static/img/bg.png');
      background-size: 100% 100%;
      box-shadow: 0 0 3px blue;
      display: flex;
      flex-direction: column;
    }

  }
</style>

