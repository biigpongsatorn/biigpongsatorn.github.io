<template>
  <div class="f-left w-100pct">
    <div class="f-left w-100pct pd-30px">
      <div class="columns bd-bt-whitesmoke">
        <div class="column">
          <span class="f-left f-s-28px f-w-500"> 🖍 vue-svg-filler</span>
        </div>
        <div class="column">
          <iframe class="f-right-tablet"
          src="https://ghbtns.com/github-btn.html?user=biigpongsatorn&repo=vue-svg-filler&type=star&count=true&size=large"
          frameborder="0"
          scrolling="0"
          width="160px"
          height="30px"/>
        </div>
      </div>
    </div>
    <div class="pd-hrzt-30px">
      🎨 Vue component for customize your svg file.
      <div class="f-left w-100pct mg-t-15px">
        <b-tag> svg </b-tag>
        <b-tag> fill </b-tag>
        <b-tag> color </b-tag>
        <b-tag> vue </b-tag>
        <b-tag> component </b-tag>
        <b-tag> plugin </b-tag>
        <b-tag> vue-filler </b-tag>
        <b-tag> vue-component </b-tag>
        <b-tag> customization </b-tag>
        <b-tag> svg-files </b-tag>
      </div>
      <div class="f-left w-100pct mg-t-15px">
        <p>
          <a href="https://npmjs.com/package/vue-svg-filler"><img src="https://img.shields.io/npm/v/vue-svg-filler.svg?style=flat" alt="NPM version"></a>
          <a href="https://npmjs.com/package/vue-svg-filler"><img src="https://img.shields.io/npm/dm/vue-svg-filler.svg?style=flat" alt="NPM downloads"></a>
          <a href="https://www.npmjs.com/package/vue-svg-filler"><img src="https://img.shields.io/npm/l/vue-svg-filler.svg?style=flat" alt="License"></a>
          <a href="https://biigpongsatorn.github.io/#/vue-svg-filler"><img src="https://travis-ci.org/biigpongsatorn/biigpongsatorn.github.io.svg?branch=dev" alt="Demo Build Status"></a>
        </p>
      </div>
      <div class="my-title">
        Install
      </div>
      <highlight language="bash" class="highlight">
      npm install vue-svg-filler --save
      </highlight>
      <div>
        Or
      </div>
      <highlight language="bash" class="highlight">
      yarn add vue-svg-filler
      </highlight>
      <hr>
      <div class="my-title">
        Usage
      </div>
      <highlight language="javascript" class="highlight">
      // main.js
      import Vue from 'vue'
      import SvgFiller from 'vue-svg-filler'

      Vue.component('svg-filler', SvgFiller)
      </highlight>
      <div>
        Or
      </div>
      <highlight language="javascript" class="highlight">
      // xxx.vue
      import SvgFiller from 'vue-svg-filler'

      export default {
        components: {
          SvgFiller
        }
      }
      </highlight>
      <hr>
      <div class="my-sub-title">
        🚨 Please note that !
      </div>
      <div class="markdown">
        1. Your <b>svg</b> file must only contain in <b>/static</b> directory <br>
        2. The <b>path</b> must be a relative path e.g. <b>static/icon.svg</b> or <b>/static/icon/file.svg</b> , Can't use <b>../</b> or <b>./</b> <br><br>
      <highlight language="html" class="highlight">
      {{ examplePath }}
      </highlight>
      </div>
      <hr>
      <div class="my-sub-title">
        Example directory structure
      </div>
      <div class="markdown">
        <img src="/static/vue-svg-filler/directory-struct.png">
      </div>
      <hr>
    </div>
    <div class="my-title pd-hrzt-30px">
      Example
    </div>
    <div class="f-left w-100pct pd-hrzt-30px">
      <VueSvgFillerDemo/>
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
      </b-tabs>
      <hr>
    </div>
    <Support link="https://github.com/biigpongsatorn/vue-svg-filler"/>
    <Contributing/>
    <License/>
  </div>
</template>

<script>
import VueSvgFillerDemo from '../components/demos/vue-svg-filler'
import Contributing from '../components/contributing'
import License from '../components/license'
import Support from '../components/support'

export default {
  name: 'vue-svg-filler',
  data () {
    return {
      examplePath: `<svg-filler path="static/PATH/OF/YOUR/FILE.svg"/>`,
      activeTab: 0,
      propsData: [
        { props: 'path', type: 'String', default: '-', description: 'Path of your svg file.' },
        { props: 'width', type: 'String', default: '24px', description: 'Width.' },
        { props: 'height', type: 'String', default: '24px', description: 'Height.' },
        { props: 'fill', type: 'String', default: '#000', description: 'Fill color.' },
        { props: 'stroke', type: 'String', default: 'none', description: 'Stroke color.' },
        { props: 'hover-color', type: 'String', default: '-', description: 'Fill color when hover icon.' },
        { props: 'hover-stroke-color', type: 'String', default: '-', description: 'Stroke color when hover icon.' }
      ],
      propsColumns: [
        { field: 'props', label: 'Props', centered: true },
        { field: 'type', label: 'Type', centered: true },
        { field: 'default', label: 'Default', centered: true },
        { field: 'description', label: 'Description', centered: true }
      ],
      eventsData: [
        { events: 'click', type: 'Function', default: '-', description: 'Triggers when click.' },
        { events: '[any].native', type: 'event: $event', default: '-', description: 'Listen to any native event, e.g. mouseover.native.' }
      ],
      eventsColumns: [
        { field: 'events', label: 'Events', centered: true },
        { field: 'type', label: 'Type', centered: true },
        { field: 'default', label: 'Default', centered: true },
        { field: 'description', label: 'Description', centered: true }
      ]
    }
  },
  components: {
    VueSvgFillerDemo,
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
