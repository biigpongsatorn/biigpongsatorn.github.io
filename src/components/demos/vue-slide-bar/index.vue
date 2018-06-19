<template>
  <div class="f-left w-100pct">
    <div class="my-sub-title"># Simple usage</div>
    <div class="f-left w-100pct pd-30px">
      <vue-slide-bar v-model="simpleValue"/>
      <div class="columns mg-t-15px">
        <div class="column">
          <b>template</b>
          <highlight language="html" class="highlight">
          {{ templateCode.simple.html }}
          </highlight>
        </div>
        <div class="column">
          <b>script</b>
          <highlight language="javascript" class="highlight">
          {{ templateCode.simple.script }}
          </highlight>
        </div>
      </div>
    </div>
    <div class="my-sub-title"># Range & Label</div>
    <div class="f-left w-100pct pd-30px">
      <vue-slide-bar
        v-model="sliderWithLabel.value"
        :data="sliderWithLabel.data"
        :range="sliderWithLabel.range"
        @callbackRange="callbackRange">
        <template slot="tooltip" slot-scope="tooltip">
          <img src="static/vue-slide-bar/rectangle-slider.svg">
        </template>
      </vue-slide-bar>
      <b>Value: {{sliderWithLabel.value}}</b>, <b>Label: {{sliderWithLabel.rangeValue.label}}</b>
      <div class="columns mg-t-15px">
        <div class="column">
          <b>template</b>
          <highlight language="html" class="highlight">
          {{ templateCode.label.html }}
          </highlight>
        </div>
        <div class="column">
          <b>script</b>
          <highlight language="javascript" class="highlight">
          {{ templateCode.label.script }}
          </highlight>
        </div>
      </div>
    </div>
    <div class="my-sub-title"># Custom Style & Min-Max</div>
    <div class="f-left w-100pct pd-30px">
      <vue-slide-bar
        v-model="sliderCustomzie.val"
        :min="1"
        :max="10"
        :processStyle="sliderCustomzie.processStyle"
        :lineHeight="sliderCustomzie.lineHeight"
        :tooltipStyles="sliderCustomzie.tooltipStyles">
      </vue-slide-bar>
      <h2>Value: {{sliderCustomzie.val}}</h2>
      <div class="columns mg-t-15px">
        <div class="column">
          <b>template</b>
          <highlight language="html" class="highlight">
          {{ templateCode.custom.html }}
          </highlight>
        </div>
        <div class="column">
          <b>script</b>
          <highlight language="javascript" class="highlight">
          {{ templateCode.custom.script }}
          </highlight>
        </div>
      </div>
    </div>
    <div class="my-sub-title"># Loading</div>
    <div class="f-left w-100pct pd-30px">
      <vue-slide-bar v-model="loadingValue" :showTooltip="false" :lineHeight="20" :isDisabled="true" :processStyle="{ backgroundColor: '#35495e' }"/>
      <b>{{loadingValue}}%</b>
      <br><br>
      <div class="button" @click="startLoad">Start !</div>
      <div class="columns mg-t-15px">
        <div class="column">
          <b>template</b>
          <highlight language="html" class="highlight">
          {{ templateCode.loading.html }}
          </highlight>
        </div>
        <div class="column">
          <b>script</b>
          <highlight language="javascript" class="highlight">
          {{ templateCode.loading.script }}
          </highlight>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlideBar from 'vue-slide-bar'

export default {
  name: 'demo-vue-slide-bar',
  data () {
    return {
      simpleValue: 50,
      sliderWithLabel: {
        value: 45,
        data: [
          15,
          30,
          45,
          60,
          75,
          90,
          120
        ],
        range: [
          {
            label: '15 mins'
          },
          {
            label: '30 mins',
            isHide: true
          },
          {
            label: '45 mins'
          },
          {
            label: '1 hr',
            isHide: true
          },
          {
            label: '1 hr 15 mins'
          },
          {
            label: '1 hr 30 mins',
            isHide: true
          },
          {
            label: '2 hrs'
          }
        ],
        rangeValue: {}
      },
      sliderCustomzie: {
        val: 9,
        lineHeight: 10,
        processStyle: { backgroundColor: '#42b883' },
        tooltipStyles: { backgroundColor: '#42b883', borderColor: '#42b883' }
      },
      loader: null,
      loadingValue: 0,
      templateCode: {
        simple: {
          html: `<vue-slide-bar v-model="simpleValue"/>`,
          script: `export default {
            data () {
              return {
                simpleValue: 50
              }
            }
          }`
        },
        label: {
          html: `<vue-slide-bar v-model="sliderWithLabel.value"
                  :data="sliderWithLabel.data"
                  :range="sliderWithLabel.range"
                  @callbackRange="callbackRange">
          <template slot="tooltip" slot-scope="tooltip">
            <img src="static/vue-slide-bar/rectangle-slider.svg">
          </template>
        </vue-slide-bar>`,
          script: `export default {
            data () {
              return {
                sliderWithLabel: {
                value: 45,
                data: [
                  15,
                  30,
                  45,
                  60,
                  75,
                  90,
                  120
                ],
                range: [
                  {
                    label: '15 mins'
                  },
                  {
                    label: '30 mins',
                    isHide: true
                  },
                  {
                    label: '45 mins'
                  },
                  {
                    label: '1 hr',
                    isHide: true
                  },
                  {
                    label: '1 hr 15 mins'
                  },
                  {
                    label: '1 hr 30 mins',
                    isHide: true
                  },
                  {
                    label: '2 hrs'
                  }
                ],
                rangeValue: {}
              }
            },
            methods: {
              callbackRange (val) {
                this.sliderWithLabel.rangeValue = val
              }
            }
          }`
        },
        custom: {
          html: `<vue-slide-bar
                  v-model="sliderCustomzie.val"
                  :min="1"
                  :max="10"
                  :processStyle="sliderCustomzie.processStyle"
                  :lineHeight="sliderCustomzie.lineHeight"
                  :tooltipStyles="sliderCustomzie.tooltipStyles">
        </vue-slide-bar>`,
          script: `export default {
            data () {
              return {
                sliderCustomzie: {
                  val: 9,
                  lineHeight: 10,
                  processStyle: { 
                    backgroundColor: '#42b883' 
                  },
                  tooltipStyles: { 
                    backgroundColor: '#42b883',
                    borderColor: '#42b883' 
                  }
                }
              }
            }
          }`
        },
        loading: {
          html: `<vue-slide-bar v-model="loadingValue"
                  :showTooltip="false"
                  :lineHeight="20"
                  :isDisabled="true"
                  :processStyle="{ backgroundColor: '#35495e' }"/>`,
          script: `export default {
            data () {
              return {
                loader: null,
                loadingValue: 0
              }
            },
            methods: {
              startLoad () {
                this.loader = setInterval(() => {
                  this.loadingValue++
                  if (this.loadingValue === 100) {
                    console.log('clear', this.loadingValue)
                    clearInterval(this.loader)
                  }
                }, 100)
              }
            }
          }`
        }
      }
    }
  },
  methods: {
    callbackRange (val) {
      this.sliderWithLabel.rangeValue = val
    },
    startLoad () {
      this.loader = setInterval(() => {
        this.loadingValue++
        if (this.loadingValue === 100) {
          console.log('clear', this.loadingValue)
          clearInterval(this.loader)
        }
      }, 100)
    }
  },
  components: {
    VueSlideBar
  }
}
</script>

<style scoped>
hr {
  float: left;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 0px;
}
.highlight .hljs {
  padding: 0 !important;
  max-height: 500px;
}
</style>
