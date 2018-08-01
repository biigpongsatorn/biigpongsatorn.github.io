<template>
  <div id="app">
    <div class="header">
      <b-dropdown class="mg-hrzt-10px" hoverable>
        <div class="header-item header-item-active" slot="trigger">
          {{ findCurrentRouteTitle }}
          <svg-filler path="/static/app/arrow-down.svg" fill="#fff" class="mg-r-10px"/>
        </div>
        <b-dropdown-item class="pd-vtc-15px" @click="$router.push({ name: 'VueSlideBar' })">
          <span>🎢 </span>Vue Slide Bar
        </b-dropdown-item>
        <b-dropdown-item class="pd-vtc-15px" @click="$router.push({ name: 'VueSvgFiller' })">
          <span>🖍 </span>Vue SVG Filler
        </b-dropdown-item>
        <b-dropdown-item class="pd-vtc-15px" @click="$router.push({ name: 'VueThailandAddressAutocomplete' })">
          <span>🇹🇭 </span>Vue Thailand Address
        </b-dropdown-item>
        <b-dropdown-item class="pd-vtc-15px" @click="$router.push({ name: 'VueInfiniteSlideBar' })">
          <span>∞ </span>Vue Infinite Slide Bar
        </b-dropdown-item>
        <b-dropdown-item class="pd-vtc-15px" @click="$router.push({ name: 'VueElementLoading' })">
          <span>⏳ </span>Vue Element Loading
        </b-dropdown-item>
        <b-dropdown-item class="pd-vtc-15px" @click="$router.push({ name: 'AboutMe' })">
          <span>😎 </span>About Me
        </b-dropdown-item>
      </b-dropdown>
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
import SvgFiller from 'vue-svg-filler'

export default {
  name: 'App',
  computed: {
    currentRoute () {
      return this.$route.name
    },
    findCurrentRouteTitle () {
      if (this.currentRoute === 'VueSlideBar') {
        return 'Slide Bar'
      } else if (this.currentRoute === 'VueSvgFiller') {
        return 'SVG Filler'
      } else if (this.currentRoute === 'VueThailandAddressAutocomplete') {
        return 'Thailand Address'
      } else if (this.currentRoute === 'VueInfiniteSlideBar') {
        return 'Vue Infinite Slide Bar'
      } else if (this.currentRoute === 'VueElementLoading') {
        return 'Vue Element Loading'
      } else if (this.currentRoute === 'AboutMe') {
        return 'About Me'
      }
    }
  },
  components: {
    SvgFiller
  }
}
</script>

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

<style scoped>
.header {
  float: left;
  width: 100%;
  background-color: #c0392b;
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
.my-sub-title {
  float: left;
  width: 100%;
  font-size: 21px;
  font-weight: bold;
  margin: 10px 0;
}

/* Customize style highlightjs */
.highlight {
  padding: 0;
  float: left;
  width: 100%;
  border-radius: 6px;
  margin: 5px 0 !important;
}
.highlight .hljs {
  padding: 0 !important;
  background-color: #f6f8fa !important;
}
.b-tabs section {
  padding: 10px 0 !important;
}
</style>
