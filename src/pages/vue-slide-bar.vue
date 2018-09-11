<template>
  <div class="f-left w-100pct">
    <div class="f-left w-100pct pd-30px">
      <div class="columns bd-bt-whitesmoke">
        <div class="column">
          <span class="f-left f-s-28px f-w-500">🎢  vue-slide-bar</span>
        </div>
        <div class="column">
          <iframe class="f-right-tablet"
          src="https://ghbtns.com/github-btn.html?user=biigpongsatorn&repo=vue-slide-bar&type=star&count=true&size=large"
          frameborder="0"
          scrolling="0"
          width="160px"
          height="30px"/>
        </div>
      </div>
    </div>
    <div class="pd-hrzt-30px">
      🏄‍ Very Simple Vue Slider Bar Component.
      <div class="f-left w-100pct mg-t-15px">
        <b-tag> vue </b-tag>
        <b-tag> slides </b-tag>
        <b-tag> slider </b-tag>
        <b-tag> slide-bar </b-tag>
        <b-tag> component </b-tag>
        <b-tag> slide </b-tag>
        <b-tag> slider-bar </b-tag>
        <b-tag> plugin </b-tag>
        <b-tag> simple </b-tag>
        <b-tag> vue-slide </b-tag>
        <b-tag> slot </b-tag>
      </div>
      <div class="f-left w-100pct mg-t-15px">
        <p>
          <a href="https://npmjs.com/package/vue-slide-bar"><img src="https://img.shields.io/npm/v/vue-slide-bar.svg?style=flat" alt="NPM version"></a>
          <a href="https://npmjs.com/package/vue-slide-bar"><img src="https://img.shields.io/npm/dm/vue-slide-bar.svg?style=flat" alt="NPM downloads"></a>
          <a href="https://www.npmjs.com/package/vue-slide-bar"><img src="https://img.shields.io/npm/l/vue-slide-bar.svg?style=flat" alt="License"></a>
          <a href="https://biigpongsatorn.github.io/#/vue-slide-bar"><img src="https://travis-ci.org/biigpongsatorn/biigpongsatorn.github.io.svg?branch=dev" alt="Demo Build Status"></a>
        </p>
      </div>
      <div class="my-title">
        Install
      </div>
      <highlight language="bash" class="highlight">
      npm install vue-slide-bar --save
      </highlight>
      <div>
        Or
      </div>
      <highlight language="bash" class="highlight">
      yarn add vue-slide-bar
      </highlight>
      <hr>
      <div class="my-title">
        Usage
      </div>
      <highlight language="javascript" class="highlight">
      // main.js
      import Vue from 'vue'
      import VueSlideBar from 'vue-slide-bar'

      Vue.component('vue-slide-bar', VueSlideBar)
      </highlight>
      <div>
        Or
      </div>
      <highlight language="javascript" class="highlight">
      // xxx.vue
      import VueSlideBar from 'vue-slide-bar'

      export default {
        components: {
          VueSlideBar
        }
      }
      </highlight>
      <hr>
    </div>
    <div class="my-title pd-hrzt-30px">
      Example
    </div>
    <div class="f-left w-100pct pd-hrzt-30px">
      <VueSlideBarDemo/>
      <hr>
    </div>
    <div class="my-title pd-hrzt-30px">
      Options
    </div>
    <div class="f-left w-100pct pd-hrzt-30px">
      <b-tabs v-model="activeTab">
        <b-tab-item label="Props">
          <b-table :data="propsData" :columns="propsColumns" striped></b-table>
        </b-tab-item>
        <b-tab-item label="Events">
          <b-table :data="eventsData" :columns="eventsColumns" striped></b-table>
        </b-tab-item>
        <b-tab-item label="Slots">
          <b-table :data="slotsData" :columns="slotsColumns" striped></b-table>
        </b-tab-item>
      </b-tabs>
      <a href="https://vuejs.org/v2/guide/components.html#Scoped-Slots">#</a> When using the template element as a slot, can add special properties `slot-scope` to get the value.
      <hr>
    </div>
    <Support link="https://github.com/biigpongsatorn/vue-slide-bar"/>
    <Contributing/>
    <License/>
  </div>
</template>

<script>
import VueSlideBarDemo from '../components/demos/vue-slide-bar'
import Contributing from '../components/contributing'
import License from '../components/license'
import Support from '../components/support'

export default {
  name: 'vue-slide-bar',
  data () {
    return {
      activeTab: 0,
      propsData: [
        { props: 'v-model', type: 'Number,String', default: '0', description: 'Initial value (v-model)' },
        { props: 'min', type: 'Number', default: '0', description: 'Minimum value' },
        { props: 'max', type: 'Number', default: '100', description: 'Maximum value' },
        { props: 'process-style', type: 'Object', default: 'null', description: 'Process bar style' },
        { props: 'tooltip-style', type: 'Object', default: 'null', description: 'Tooltip style' },
        { props: 'label-style', type: 'Object', default: 'null', description: 'Label style' },
        { props: 'data', type: 'Array', default: 'null', description: 'Custom data' },
        { props: 'is-disabled', type: 'Boolean', default: 'false', description: 'Flag for disable slider bar' },
        { props: 'show-tooltip', type: 'Boolean', default: 'true', description: 'Flag display tooltip' },
        { props: 'icon-width', type: 'Number', default: '20', description: 'Icon width' },
        { props: 'line-height', type: 'Number', default: '5', description: 'Line height' },
        { props: 'speed', type: 'Number', default: '0.5', description: 'Transition speed' }
        { props: 'paddingless', type: 'Boolean', default: 'false', description: 'Remove padding' },
      ],
      propsColumns: [
        { field: 'props', label: 'Props', centered: true },
        { field: 'type', label: 'Type', centered: true },
        { field: 'default', label: 'Default', centered: true },
        { field: 'description', label: 'Description', centered: true }
      ],
      eventsData: [
        { events: 'callback-range', type: 'Function', default: '(range) => {}', description: 'Tricker when values change return range data' }
      ],
      eventsColumns: [
        { field: 'events', label: 'Events', centered: true },
        { field: 'type', label: 'Type', centered: true },
        { field: 'default', label: 'Default', centered: true },
        { field: 'description', label: 'Description', centered: true }
      ],
      slotsData: [
        { name: 'tooltip', description: 'Customize the tooltip slot' }
      ],
      slotsColumns: [
        { field: 'name', label: 'Name', centered: true },
        { field: 'description', label: 'Description', centered: true }
      ]
    }
  },
  components: {
    VueSlideBarDemo,
    Contributing,
    License,
    Support
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
</style>
