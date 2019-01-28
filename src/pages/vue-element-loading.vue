<template>
  <div class="f-left w-100pct">
    <div class="f-left w-100pct pd-30px">
      <div class="columns bd-bt-whitesmoke">
        <div class="column">
          <span class="f-left f-s-28px f-w-500">Vue Element Loading</span>
        </div>
        <div class="column">
          <iframe class="f-right-tablet"
          src="https://ghbtns.com/github-btn.html?user=biigpongsatorn&repo=vue-element-loading&type=star&count=true&size=large"
          frameborder="0"
          scrolling="0"
          width="160px"
          height="30px"/>
        </div>
      </div>
    </div>
    <div class="pd-hrzt-30px">
      ⏳ Loading inside a container or full screen for Vue.js
      <div class="f-left w-100pct mg-t-15px">
        <b-tag> vue </b-tag>
        <b-tag> infinite </b-tag>
        <b-tag> infinity </b-tag>
        <b-tag> slider </b-tag>
        <b-tag> bar </b-tag>
        <b-tag> component </b-tag>
      </div>
      <div class="f-left w-100pct mg-t-15px">
        <p>
          <a href="https://npmjs.com/package/vue-element-loading"><img src="https://img.shields.io/npm/v/vue-element-loading.svg?style=flat" alt="NPM version"></a>
          <a href="https://npmjs.com/package/vue-element-loading"><img src="https://img.shields.io/npm/dm/vue-element-loading.svg?style=flat" alt="NPM downloads"></a>
          <a href="https://www.npmjs.com/package/vue-element-loading"><img src="https://img.shields.io/npm/l/vue-element-loading.svg?style=flat" alt="License"></a>
          <a href="https://www.npmjs.com/package/vue-element-loading"><img src="https://travis-ci.org/biigpongsatorn/biigpongsatorn.github.io.svg?branch=dev" alt="Build Status"></a>
        </p>
      </div>
      <div class="my-title">
        Install
      </div>
      <highlight language="bash" class="highlight">
      npm install --save vue-element-loading
      </highlight>
      <div>
        Or
      </div>
      <highlight language="bash" class="highlight">
      yarn add vue-element-loading
      </highlight>
      <hr>
      <div class="my-title">
        Usage
      </div>
      <highlight language="javascript" class="highlight">
      import Vue from 'vue'
      import VueElementLoading from 'vue-element-loading'

      Vue.component('VueElementLoading', ElementLoading)
      </highlight>
      <div>
        Or
      </div>
      <highlight language="javascript" class="highlight">
      import VueElementLoading from 'vue-element-loading'

      export default {
        components: {
          VueElementLoading
        }
      }
      </highlight>
      <hr>
    </div>
    <div class="my-title pd-hrzt-30px">
      Example
    </div>
    <div class="f-left w-100pct">
      <VueElementLoadingDemo/>
      <hr>
    </div>
    <div class="f-left w-100pct pd-hrzt-30px">
      Please see more example <a href="https://vue-element-loading.netlify.com/">this site</a>.
    </div>
    <div class="my-title pd-hrzt-30px">
      Options
    </div>
    <div class="f-left w-100pct pd-hrzt-30px">
      <b-table :data="propsData" :columns="propsColumns" striped></b-table>
      <hr>
    </div>
    <Support link="https://github.com/biigpongsatorn/vue-element-loading"/>
    <Contributing/>
    <License/>
  </div>
</template>

<script>
import VueElementLoadingDemo from '../components/demos/vue-element-loading'
import Contributing from '../components/contributing'
import License from '../components/license'
import Support from '../components/support'

export default {
  name: 'vue-element-loading',
  data () {
    return {
      activeTab: 0,
      propsData: [
        { props: 'active', type: 'Boolean', default: '-', description: 'Status for show/hide loading' },
        { props: 'spinner', type: 'String', default: 'spinner', description: 'Spinner icon name: spinner, mini-spinner, ring, line-wave, line-scale, line-down, bar-fade, bar-fade-scale' },
        { props: 'color', type: 'String', default: '#ccc', description: 'Color of spinner icon' },
        { props: 'is-full-screen', type: 'Boolean', default: 'false', description: 'Loader will overlay the full page' },
        { props: 'background-color', type: 'String', default: 'rgba(255, 255, 255, .9)',description: 'Background color of spinner icon (for overlay)' },
        { props: 'size', type: 'String', default: '40',description: 'The size to display the spinner in pixels (NOTE: this will not affect custom spinner images)' },
        { props: 'duration', type: 'String', default: '0.6', description: `The duration of one 'loop' of the spinner animation, in seconds (NOTE: this will not affect custom spinner images)` },
        { props: 'text', type: 'String', default: '-', description: 'Text will appear below loader' },
        { props: 'text-style', type: 'Object', default: '{}', description: 'Change style of the text below loader' },
      ],
      propsColumns: [
        { field: 'props', label: 'Props', centered: true },
        { field: 'type', label: 'Type', centered: true },
        { field: 'default', label: 'Default', centered: true },
        { field: 'description', label: 'Description', centered: true }
      ]
    }
  },
  components: {
    VueElementLoadingDemo,
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
