<template>
  <div>
    <div class="container" style="max-width: 100%;">
      <!-- START ARTICLE FEED -->
      <section class="articles">
        <div class="column is-10 is-offset-1">
          <!-- START ARTICLE -->
          <div class="card article">
            <div class="card-image" v-if="existsFeatured">
              <figure class="image">
                <img :src="entry.featured.path">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <p class="title article-title">{{entry.title}}</p>
                  <div class="tags has-addons level-item">
                    <span class="tag is-rounded primary-background has-text-white">@{{entry.author}}</span>
                    <span class="tag is-rounded">{{reformatTime(entry._created)}}</span>
                  </div>
                </div>
              </div>
              <!--<mark-down :source="entry.content"></mark-down>-->
              <div class="content article-body m-t-3" v-html="entry.content"></div>
              <hr>
              <div class="article-footer">
                <span class="tag primary-background has-text-white" v-for="(tag, key) in entry.tags"
                      :key="key">{{tag}}</span>
              </div>
            </div>
          </div>
          <!-- END ARTICLE -->

          <!-- START ARTICLE -->
          <!--<div class="card article">
            <div class="card-content">
              <div class="media">
                <div class="media-center">
                  <img src="http://www.radfaces.com/images/avatars/daria-morgendorffer.jpg" class="author-image"
                       alt="Placeholder image">
                </div>
                <div class="media-content has-text-centered">
                  <p class="title article-title">Sapien eget mi proin sed 🔱</p>
                  <p class="subtitle is-6 article-subtitle">
                    <a href="#">@daria</a> on February 17, 2018
                  </p>
                </div>
              </div>
              <div class="content article-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas. Sapien eget mi proin
                  sed. Sit amet mattis vulputate enim.
                </p>
                <p>
                  Commodo ullamcorper a lacus vestibulum sed arcu. Fermentum leo vel orci porta non. Proin fermentum leo
                  vel orci porta non pulvinar. Imperdiet proin fermentum leo vel. Tortor posuere ac ut consequat semper
                  viverra. Vestibulum lectus mauris ultrices eros.
                </p>
                <h3 class="has-text-centered">Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Cras
                  tincidunt lobortis feugiat vivamus.</h3>
                <p>
                  In eu mi bibendum neque egestas congue quisque egestas diam. Enim nec dui nunc mattis enim ut tellus.
                  Ut morbi tincidunt augue interdum velit euismod in. At in tellus integer feugiat scelerisque varius
                  morbi enim nunc. Vitae suscipit tellus mauris a diam.
                  Arcu non sodales neque sodales ut etiam sit amet.
                </p>
              </div>
            </div>
          </div>-->
          <!-- END ARTICLE -->

          <!-- START PROMO BLOCK -->
          <!--<section class="hero is-info is-bold is-small promo-block">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  <i class="fa fa-bell-o"></i> Nemo enim ipsam voluptatem quia.</h1>
                <span class="tag is-black is-medium is-rounded">
                                    Natus error sit voluptatem
                                </span>
              </div>
            </div>
          </section>-->
          <!-- END PROMO BLOCK -->

          <!-- START ARTICLE -->
          <!--<div class="card article">
            <div class="card-content">
              <div class="media">
                <div class="media-center">
                  <img src="http://www.radfaces.com/images/avatars/angela-chase.jpg" class="author-image"
                       alt="Placeholder image">
                </div>
                <div class="media-content has-text-centered">
                  <p class="title article-title">Cras tincidunt lobortis feugiat vivamus.</p>
                  <p class="subtitle is-6 article-subtitle">
                    <a href="#">@angela</a> on October 7, 2017
                  </p>
                </div>
              </div>
              <div class="content article-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas. Sapien eget mi proin
                  sed. Sit amet mattis vulputate enim.
                </p>
                <p>
                  Commodo ullamcorper a lacus vestibulum sed arcu. Fermentum leo vel orci porta non. Proin fermentum leo
                  vel orci porta non pulvinar. Imperdiet proin fermentum leo vel. Tortor posuere ac ut consequat semper
                  viverra. Vestibulum lectus mauris ultrices eros.
                </p>
                <h3 class="has-text-centered">“Everyone should be able to do one card trick, tell two jokes, and recite
                  three poems, in case they are ever trapped in an elevator.”</h3>
                <p>
                  In eu mi bibendum neque egestas congue quisque egestas diam. Enim nec dui nunc mattis enim ut tellus.
                  Ut morbi tincidunt augue interdum velit euismod in. At in tellus integer feugiat scelerisque varius
                  morbi enim nunc. Vitae suscipit tellus mauris a diam.
                  Arcu non sodales neque sodales ut etiam sit amet.
                </p>
              </div>
            </div>
          </div>-->
          <!-- END ARTICLE -->
        </div>
      </section>
      <!-- END ARTICLE FEED -->
    </div>
    <div class="container max-width-100 m-t-2 m-b-2">
      <div class="columns">
        <div class="column has-text-centered">
          <nuxt-link to="/" class="button">
            <i class="fa fa-angle-double-left" aria-hidden="true"></i> &nbsp; Regresar al listado
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    name: "_id.vue",
    layout: 'master',
    components: {
      'mark-down': VueMarkdown,
    },
    created() {

    },
    data() {
      return {
        entry: {
          featured: {
            path: '',
          }
        },
      }
    },
    mounted() {
      this.getFilteredPosts();
    },
    methods: {
      getFilteredPosts() {
        let filtered = {
          filter: {"_id": this.$route.params.id},
          //fields: ["title", "items"],
          //fieldsFilter: ["title"],
          //populate: 3
        };

        this.$axios.$post(`${process.env.SERVER}/api/collections/get/publicaciones?token=${process.env.TOKEN}`, filtered)
          .then(res => {
            this.entry = res.entries[0];
            console.log(res);
          });
      },
      reformatTime(timestamp) {
        return this.$moment(timestamp * 1000).format('D MMM YYYY', 'es');
      },
      existsFeatured() {
        return Object.keys(this.entry).length;
      }
    }
  }
</script>

<style scoped>
  .tag {
    margin-right: 1em;
  }

  .articles {
    min-height: 83vh;
  }
</style>
