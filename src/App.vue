<template>
  <div id="app">
    <div class="header">
      <div class="header-item"
      :class="{ 'header-item-active': $route.name === 'VueSlideBar' }"
      @click="$router.push({ name: 'VueSlideBar' })">
        <span>🎢 </span>Slide Bar
      </div>
      <div class="header-item"
      :class="{ 'header-item-active': $route.name === 'VueSvgFiller' }"
      @click="$router.push({ name: 'VueSvgFiller' })">
        <span>🖍 </span>SVG Filler
      </div>
      <div class="header-item"
      :class="{ 'header-item-active': $route.name === 'VueThailandAddressAutocomplete' }"
      @click="$router.push({ name: 'VueThailandAddressAutocomplete' })">
        <span>🇹🇭 </span>Thailand Address
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
        <iframe src="https://ghbtns.com/github-btn.html?user=biigpongsatorn&type=follow&count=true&size=large" frameborder="0" scrolling="0" width="220px" height="30px"></iframe>
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
  background-color: #000;
}
.header-item {
  float: left;
  font-size: 18px;
  font-weight: bold;
  color: rgba(255,255,255,0.75);
  padding: 15px;
}
.header-item:hover {
  background-color: rgba(255,255,255,0.125);
  color: #fff;
  cursor: pointer;
}
.header-item-active {
  background-color: rgba(255,255,255,0.125);
  color: #fff;
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
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
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
  margin: 10px 0;
}
.bd-bt-whitesmoke {
  border-bottom: 1px solid whitesmoke;
}
.my-title {
  float: left;
  width: 100%;
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0;
}
.highlight {
  padding: 0;
  float: left;
  width: 100%;
  border-radius: 6px;
  margin: 5px 0 !important;
}
.highlight .hljs {
  padding: 0 !important;
}
</style>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #0366d6;
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
