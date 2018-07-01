<template>
  <div id="main-container">
    <navbar></navbar>
    <nuxt/>
    <footer class="footer">
      <div class="content has-text-centered">
        <p class="has-text-weight-bold is-size-5">The Journal por <a href="https://eichgi.com">Hiram Guerrero</a></p>
      </div>
    </footer>
  </div>
</template>

<script>
  import navbar from '~/components/navbar.vue'

  export default {
    name: "master",
    components: {
      navbar,
    },
  }
</script>

<style scoped>
  .container {
    background: white;
    min-height: 93vh;
  }

  /*footer {
    background: #4a4a4a;
    color: white !important;
  }*/
</style>
