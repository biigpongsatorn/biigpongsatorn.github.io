<template>
  <div class="f-left w-100pct">
    <div class="my-sub-title pd-hrzt-30px"># Full Screen</div>
    <div class="f-left w-100pct pd-hrzt-30px mg-vtc-10px">
      <vue-element-loading :active="showFullScreen" :is-full-screen="true"/>
      <a class="button" @click="startLoading('full')">
        Start
      </a>
    </div>
    <div class="f-left w-100pct pd-hrzt-30px">
      <highlight language="html" class="highlight">
      {{ templateCode.fullscreen.html }}
      </highlight>
    </div>
    <div class="my-sub-title pd-hrzt-30px"># Inside container</div>
    <div class="f-left w-100pct pd-hrzt-30px mg-vtc-10px">
      <div>
        <a class="button" @click="startLoading('inside')">
          Start
        </a>
      </div>
      <div class="f-left pd-30px mg-vtc-10px bd-rd-5px bg-cl-light mx-w-200px">
        <vue-element-loading :active="showInside" spinner="bar-fade-scale" color="#FF6700"/>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit.
        </span>
      </div>
    </div>
    <div class="f-left w-100pct pd-hrzt-30px">
      <highlight language="html" class="highlight">
      {{ templateCode.inside.html }}
      </highlight>
    </div>
    <div class="my-sub-title pd-hrzt-30px"># Customize loader</div>
    <div class="f-left w-100pct pd-hrzt-30px mg-vtc-10px">
      <div>
        <a class="button" @click="startLoading('customize loader')">
          Start
        </a>
      </div>
      <div class="f-left pd-30px mg-vtc-10px bd-rd-5px bg-cl-light mx-w-300px">
        <vue-element-loading :active="showCustomizeLoader">
          <img src="https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif" width="55px" height="55px">
        </vue-element-loading>
        <span>
          Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam.
          Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam.
        </span>
      </div>
    </div>
    <div class="f-left w-100pct pd-hrzt-30px">
      <highlight language="html" class="highlight">
      {{ templateCode.customizeLoader.html }}
      </highlight>
    </div>
    <div class="my-sub-title pd-hrzt-30px"># Spinner</div>
    <div class="f-left w-100pct pd-hrzt-30px mg-vtc-10px">
      <div class="columns is-mobile">
        <div class="column w-50px">
          <div class="spinner-box">
            <vue-element-loading :active="true" spinner="spinner" color="#FF6700"/>
          </div>
          <span>spinner</span>
        </div>
        <div class="column w-50px">
          <div class="spinner-box">
            <vue-element-loading :active="true" spinner="mini-spinner" color="#FF6700"/>
          </div>
          <span>mini-spinner</span>
        </div>
        <div class="column w-50px">
          <div class="spinner-box">
            <vue-element-loading :active="true" spinner="ring" color="#FF6700"/>
          </div>
          <span>ring</span>
        </div>
        <div class="column w-50px">
          <div class="spinner-box">
            <vue-element-loading :active="true" spinner="line-wave" color="#FF6700"/>
          </div>
          <span>line-wave</span>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column w-50px">
          <div class="spinner-box">
            <vue-element-loading :active="true" spinner="line-scale" color="#FF6700"/>
          </div>
          <span>line-scale</span>
        </div>
        <div class="column w-50px">
          <div class="spinner-box">
            <vue-element-loading :active="true" spinner="line-down" color="#FF6700"/>
          </div>
          <span>line-down</span>
        </div>
        <div class="column w-50px">
          <div class="spinner-box">
            <vue-element-loading :active="true" spinner="bar-fade" color="#FF6700"/>
          </div>
          <span>bar-fade</span>
        </div>
        <div class="column w-50px">
          <div class="spinner-box">
            <vue-element-loading :active="true" spinner="bar-fade-scale" color="#FF6700"/>
          </div>
          <span>bar-fade-scale</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueElementLoading from 'vue-element-loading'
export default {
  data () {
    return {
      templateCode: {
        fullscreen: {
          html: `<vue-element-loading :active="isActive" :is-full-screen="true"/>`
        },
        inside: {
          html: `<div class="my-container">
      <vue-element-loading :active="isActive" spinner="bar-fade-scale" color="#FF6700"/>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit.
      </span>
    </div>`
        },
        customizeLoader: {
          html: `<div class="my-container">
      <vue-element-loading :active="showCustomizeLoader">
        <img src="pikachu.gif" width="55px" height="55px">
      </vue-element-loading>
      <span>
        Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam.
        Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam.
      </span>
    </div>`
        }
      },
      showFullScreen: false,
      showInside: false,
      showCustomizeLoader: false
    }
  },
  methods: {
    startLoading (type) {
      if (type === 'full') {
        this.showFullScreen = true
        setTimeout(() => { this.showFullScreen = false }, 3000)
      } else if (type === 'inside') {
        this.showInside = true
        setTimeout(() => { this.showInside = false }, 3000)
      } else {
        this.showCustomizeLoader = true
        setTimeout(() => { this.showCustomizeLoader = false }, 3000)
      }
    }
  },
  components: { VueElementLoading }
}
</script>

<style scoped>
.spinner-box {
  background-color: #000;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  text-align: center;
}
</style>
