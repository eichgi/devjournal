<template>
  <div id="main-container">
    <navbar></navbar>
    <nuxt/>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import navbar from '~/components/navbar.vue'
  import footer from '~/components/footer.vue'

  export default {
    name: "master",
    components: {
      navbar,
      'main-footer': footer,
    },
  }
</script>

<style scoped>
  .container {
    background: white;
    min-height: 93vh;
  }
</style>
