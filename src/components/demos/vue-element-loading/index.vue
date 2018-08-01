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
        }
      },
      showFullScreen: false,
      showInside: false
    }
  },
  methods: {
    startLoading (type) {
      if (type === 'full') {
        this.showFullScreen = true
        setTimeout(() => { this.showFullScreen = false }, 3000)
      } else {
        this.showInside = true
        setTimeout(() => { this.showInside = false }, 3000)
      }
    }
  },
  components: { VueElementLoading }
}
</script>
