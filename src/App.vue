<template>
  <div id="app">
    <div class="nav">
      <div class="tit" @click="toHome()">HCIRanking</div>
      <div class="nav-items">
        <span @click="toGR()" :class="{clicked:clickFlag == 'gr'}">GeneralRank</span>
        <span>|</span>
        <span @click="toNKR()" :class="{clicked:clickFlag == 'nkr'}">NewKeyRank</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      clickFlag:0
    }
  },
  methods: {
    toHome() {
      this.$router.push({
        path:'/'
      })
    },
    toGR() {
      this.clickFlag = 'gr';
      this.$router.push({
        path:'/'
      })
    },
    toNKR() {
      this.clickFlag = 'nkr';
      this.$router.push({
        path:'/nkr'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav {
  height: 3vw;
  width: 100%;
  background-color: #353866;
  display: flex;
  justify-content: space-between;
  padding: 0.3vw;
}
.tit {
  color: #f8faff;
  font-size: 2.5vw;
  line-height: 3vw;
  margin: 0 0 0 2.7vw;
}
.tit {
  cursor: pointer;
}
.nav-items {
  color: #f8faff;
  line-height: 3vw;
  margin: 0 2.7vw 0 0;
}
.nav-items :hover {
  cursor: pointer;
}
.clicked {
  color: #CBA6C3;
}
</style>
