<template>
  <div id="app">
    <div class="header">
      <div class="header-item">
        🎢 Slide Bar
      </div>
      <div class="header-item">
        🖍 SVG Filler
      </div>
      <div class="header-item">
        🇹🇭 Thailand Address
      </div>
      <div class="f-right pd-t-12px pd-r-15px" v-if="currentRoute !== 'AboutMe'">
        <a class="github-button"
        href="https://github.com/biigpongsatorn/vue-slide-bar"
        data-size="large"
        data-show-count="true"
        aria-label="Star biigpongsatorn/vue-slide-bar on GitHub">
          Star
        </a>
      </div>
    </div>
    <div class="router-view">
      <router-view/>
    </div>
    <div class="footer">
      <div>
        Developed with ❤️ and ☕️ by <a href="https://github.com/biigpongsatorn">Pongsatorn Nitithammawoot</a>
      </div>
      <br>
      <div>
        Source code licensed <a href="https://opensource.org/licenses/MIT">MIT</a>
      </div>
      <div>
        <b>Follow me</b> on GitHub
      </div>
      <br>
      <div>
        <a class="github-button" href="https://github.com/biigpongsatorn" data-size="large" aria-label="Follow @biigpongsatorn on GitHub">Follow @biigpongsatorn</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    currentRoute () {
      return this.$route.name
    }
  }
}
</script>

<style scoped>
.header {
  float: left;
  width: 100%;
  background-color: #42b883;
}
.header-item {
  float: left;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 15px;
}
.header-item:hover {
  background-color: #45a077;
  cursor: pointer;
}
.router-view {
  float: left;
  width: 100%;
  min-height: calc(100vh - 300px - 57px);
}
.footer {
  float: left;
  width: 100%;
  height: 300px;
}
</style>

<style>
#app {
  float: left;
  width: 100%;
}
* {
  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #35495e;
  font-size: 16px;
}
.markdown {
  padding: 16px;
  overflow: auto;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
}
</style>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #42b883;
$primary-invert: findColorInvert($primary);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "primary": ($primary, $primary-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
