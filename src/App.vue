<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menuVisible: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<style>
  @import './assets/css/style.css';
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }

  
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .product-list.add-btn{
    text-decoration: none;
    font-weight: 14px;
    font-size: 14px;
    color:white;
}
  
</style>
