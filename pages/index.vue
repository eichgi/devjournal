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
              <p class="post-title">
                <nuxt-link :to="{ name: 'entradas-id', params: { id: post._id}}" class="title is-4">
                  {{post.title}}
                </nuxt-link>
              </p>
              <br>
              <!--<p class="subtitle is-6 primary-color">@{{post.author}}</p>-->
              <p v-html="postExcerpt(post.content, 250)"></p>
            </li>
          </ul>
          <button class="button primary-background has-text-white m-t-2" @click="getPosts()" v-show="filters.skip > 0">
            Últimas
          </button>
          <button class="button primary-background has-text-white m-t-2" @click="getPosts(filters.skip+5)">
            Entradas anteriores
          </button>
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
        filters: {
          sort: {_created: -1},
          limit: 5,
          skip: 0,
        }
      }
    },
    computed: {},
    methods: {
      burguerMenu() {
        this.menuVisible = !this.menuVisible;
      },
      getPosts(skip = 0) {
        this.filters.skip = skip;
        this.$axios.$post(`${process.env.SERVER}/api/collections/get/publicaciones?token=${process.env.TOKEN}`, this.filters)
          .then(res => {
            console.log(res);
            if (res.entries.length) {
              this.posts = res.entries;
            } else {
              this.filters.skip -= 5;
            }
          });
      },
      postExcerpt(content, length = 150) {
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

  .post-title:hover {
    text-decoration: underline;
  }

  .post-title:hover > a {
    color: #AA3939;
  }
</style>
