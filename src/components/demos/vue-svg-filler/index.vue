<template>
  <div class="f-left w-100pct">
    <div>
      <div class="my-sub-title"># Simple usage</div>
      <div class="f-left pd-vtc-30px">
        <svg-filler path="/static/vue-svg-filler/github.svg"/>
      </div>
      <highlight language="html" class="highlight">
      {{ templateCode.simple.html }}
      </highlight>
    </div>
    <div>
      <div class="my-sub-title"># Customize fill & size</div>
      <div class="f-left pd-vtc-30px">
        <svg-filler path="/static/vue-svg-filler/icon/bitcoin.svg" fill="#FF9900" width="50px" height="50px"/>
      </div>
      <highlight language="html" class="highlight">
      {{ templateCode.customize.html }}
      </highlight>
    </div>
    <div>
      <div class="my-sub-title"># Fill & Stroke <span>(click icon for change color)</span></div>
      <div class="f-left pd-vtc-30px">
        <svg-filler path="/static/vue-svg-filler/icon/palette.svg"
        class="cs-pointer"
        :fill="svgPalette.color"
        :width="svgPalette.width"
        :height="svgPalette.height"
        @click="svgPalette.color = randomColor()"/>
        <svg-filler path="/static/vue-svg-filler/icon/palette.svg"
        class="cs-pointer"
        :stroke="svgPalette.color"
        fill="none"
        :width="svgPalette.width"
        :height="svgPalette.height"
        @click="svgPalette.color = randomColor()"/>
        <span class="my-sub-title" :style="{ 'color': svgPalette.color }">{{ svgPalette.color }}</span>
      </div>
      <highlight language="html" class="highlight">
      {{ templateCode.click.html }}
      </highlight>
      <highlight language="javascript" class="highlight">
      {{ templateCode.click.script }}
      </highlight>
    </div>
    <div>
      <div class="my-sub-title"># Hover</div>
      <div class="f-left pd-vtc-30px t-al-center">
        <svg-filler path="/static/vue-svg-filler/vuejs.svg"
        class="cs-pointer"
        :fill="svgVuejs.fill"
        :width="svgVuejs.width"
        :height="svgVuejs.height"
        :hover-color="svgVuejs.hoverColor"/>
        <div>Hover me !</div>
      </div>
      <highlight language="html" class="highlight">
      {{ templateCode.hover.html }}
      </highlight>
    </div>
    <div>
      <div class="my-sub-title"># Random Color</div>
      <div class="f-left pd-30px">
        <svg-filler path="/static/vue-svg-filler/icon/frog.svg" :fill="svgFrog.fill" width="50px" height="50px"/>
      </div>
      <highlight language="html" class="highlight">
      {{ templateCode.frog.html }}
      </highlight>
      <highlight language="javascript" class="highlight">
      {{ templateCode.frog.script }}
      </highlight>
    </div>
  </div>
</template>

<script>
import SvgFiller from 'vue-svg-filler'

export default {
  name: 'app',
  data () {
    return {
      svgPalette: {
        color: this.randomColor(),
        width: '150px',
        height: '150px'
      },
      svgVuejs: {
        fill: '#42b883',
        width: '150px',
        height: '150px',
        hoverColor: '#35495e'
      },
      svgFrog: {
        fill: this.randomColor()
      },
      templateCode: {
        simple: {
          html: `<svg-filler path="/static/github.svg"/>`
        },
        customize: {
          html: `<svg-filler path="/static/icon/bitcoin.svg" fill="#FF9900" width="50px" height="50px"/>`
        },
        click: {
          html: `<svg-filler path="/static/vue-svg-filler/icon/palette.svg" class="cs-pointer" :fill="svgPalette.color" :width="svgPalette.width" :height="svgPalette.height" @click="svgPalette.color = randomColor()"/>

    <svg-filler path="/static/vue-svg-filler/icon/palette.svg" class="cs-pointer" :stroke="svgPalette.color" fill="none" :width="svgPalette.width" :height="svgPalette.height" @click="svgPalette.color = randomColor()"/>`,
          script: `export default {
      data () {
        return {
          svgPalette: {
            color: this.randomColor(),
            width: '150px',
            height: '150px'
          }
        }
      },
      methods: {
        randomColor () {
          let length = 6
          let chars = '0123456789ABCDEF'
          let hex = '#'
          while (length--) hex += chars[(Math.random() * 16) | 0]
          return hex
        }
      }
    }`
        },
        hover: {
          html: `<svg-filler path="/static/vuejs.svg" fill="#42b883" width="150px" height="150px":hover-color="#35495e"/>`
        },
        frog: {
          html: `<svg-filler path="/static/icon/frog.svg" :fill="svgFrog.fill" width="50px" height="50px"/>`,
          script: `export default {
      data () {
        return {
          svgFrog: {
            fill: this.randomColor()
          }
        }
      },
      mounted () {
        setInterval(() => {
          this.svgFrog.fill = this.randomColor()
        }, 100)
      },
      methods: {
        randomColor () {
          let length = 6
          let chars = '0123456789ABCDEF'
          let hex = '#'
          while (length--) hex += chars[(Math.random() * 16) | 0]
          return hex
        }
      }
    }`
        }
      }
    }
  },
  mounted () {
    setInterval(() => {
      this.svgFrog.fill = this.randomColor()
    }, 100)
  },
  methods: {
    randomColor () {
      let length = 6
      let chars = '0123456789ABCDEF'
      let hex = '#'
      while (length--) hex += chars[(Math.random() * 16) | 0]
      return hex
    }
  },
  components: {
    SvgFiller
  }
}
</script>
