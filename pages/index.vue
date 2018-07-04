<template>
  <div id="main-container" class="container">
    <section class="hero is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <navbar></navbar>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-size-1" style="text-decoration: underline">Dev Journal</h1>
          <h2 class="subtitle primary-color">Un blog para desarrolladores</h2>
          <ul class="posts-list has-text-left">
            <li class="posts-item" v-for="(post, index) in posts" :key="index">
              <p>
                <nuxt-link :to="{ name: 'entradas-id', params: { id: post._id}}" class="title is-4">
                  {{post.title}}
                </nuxt-link>
              </p>
              <p class="subtitle is-6 primary-color">@{{post.author}}</p>
              <!--p>{{postExcerpt(post.content, 200)}}</p>-->
              <p v-html="postExcerpt(post.content, 250)"></p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <main-footer></main-footer>
      </div>
    </section>
  </div>
</template>

<script>
  import navbar from '~/components/navbar.vue'
  import footer from '~/components/footer.vue'

  export default {
    name: "index",
    mounted() {
      this.getPosts();
    },
    components: {
      navbar,
      'main-footer': footer,
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
            console.log(res);
          });
      },
      postExcerpt(content, length = 150) {
        //content = content.replace(/<(?:.|\n)*?>/gm, '');
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
