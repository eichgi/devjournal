<template>
  <div id="main-container" class="container">
    <section class="hero is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <!--<header class="navbar">
          <div class="navbar-start">
            <nuxt-link to="/" class="navbar-item has-text-weight-bold pl-1 pr-1">The Journal</nuxt-link>
            &lt;!&ndash;<div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="/documentation/overview/start/">
                Docs
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item" href="/documentation/overview/start/">
                  Overview
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                  Modifiers
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                  Columns
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                  Layout
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                  Form
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                  Elements
                </a>
                <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                  Components
                </a>
              </div>
            </div>&ndash;&gt;
          </div>
          <div id="navbarMenuHeroC" class="navbar-menu">
            <div class="navbar-end">
              &lt;!&ndash;<a href="/posts" class="navbar-item is-active">
                Entradas
              </a>&ndash;&gt;
              <nuxt-link to="/posts" class="navbar-item is-active">Entradas</nuxt-link>
            </div>
          </div>
        </header>-->
        <!--<nav class="navbar is-dark">
          <div class="navbar-brand">
            <nuxt-link to="/" class="navbar-item has-text-weight-bold pl-1 pr-1">Dev Journal</nuxt-link>
            <div :class="[menuVisible ? 'is-active' : '', 'navbar-burger', 'burger']"
                 data-target="navMenuColordark-example"
                 @click="burguerMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navMenuColordark-example" :class="[menuVisible ? 'is-active' : '', 'navbar-menu']">
            <div class="navbar-start"></div>
            <div class="navbar-end">
              <nuxt-link to="/posts" class="navbar-item">Entradas</nuxt-link>
            </div>
          </div>
        </nav>-->
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
              <p>{{postExcerpt(post.content, 200)}}</p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <!--<nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li class="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </div>
        </nav>-->
        <footer class="footer">
          <div class="content has-text-centered">
            <p class="has-text-weight-bold is-size-5">The Journal por <a href="https://eichgi.com">Hiram Guerrero</a>
            </p>
          </div>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
  import navbar from '~/components/navbar.vue'

  export default {
    name: "index",
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
            console.log(res);
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
