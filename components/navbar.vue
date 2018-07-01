<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item has-text-weight-bold pl-1 pr-1">Dev Journal</nuxt-link>
      <div :class="[menuVisible ? 'is-active' : '', 'navbar-burger', 'burger']" data-target="navMenuColordark-example"
           @click="burguerMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navMenuColordark-example" :class="[menuVisible ? 'is-active' : '', 'navbar-menu']">
      <div class="navbar-start"></div>
      <div class="navbar-end">
        <nuxt-link to="/posts" class="navbar-item is-active">Entradas</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "navbar",
    data() {
      return {
        menuVisible: false,
      }
    },
    methods: {
      burguerMenu() {
        this.menuVisible = !this.menuVisible;
      }
    },
  }
</script>

<style scoped>
  nav {
    max-width: 960px;
    margin: 0 auto;
  }
</style>
