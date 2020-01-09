<template>
  <!--<div id="main-container" class="container">-->
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="/newspaper.png" alt="Image">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p class="title is-size-3 red-hover">Dev Journal: Un blog para desarrolladores</p>
                  <p class="subtitle has-text-justified">Este blog esta hecho con la finalidad de compartir recursos y
                    publicaciones
                    sobre lenguajes, frameworks y librerías. Así como también conceptos y ejemplos de patrones de
                    diseño, teoría computacional y sysadmins/devops!</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--</div>-->
</template>

<script>
  import navbar from '~/components/navbar.vue'

  export default {
    name: "index",
    layout: 'master',
    mounted() {
      this.getPosts();
    },
    components: {
      navbar,
    },
    data() {
      return {
        menuVisible: false,
        posts: [],
      }
    },
    computed: {},
    methods: {
      burguerMenu() {
        this.menuVisible = !this.menuVisible;
      },
      getPosts() {
        this.$axios.$get(`${process.env.SERVER}/api/collections/get/publicaciones?token=${process.env.TOKEN}`)
          .then(res => {
            this.posts = res.entries;
          });
      },
      postExcerpt: function (content, length = 150) {
        return content ? `${content.substr(0, length)}...` : '';
      },
    },
  }
</script>

<style scoped>
  .container {
    background: white;
  }

  .navbar {
    background: #363636;
  }

  .navbar .navbar-item {
    color: white;
  }

  .posts-item {
    margin-left: 1em;
    padding: 1em 0;
    border-bottom: 1px solid #DDD;
  }
</style>
