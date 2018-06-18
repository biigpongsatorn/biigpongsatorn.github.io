<template>
  <div class="f-left w-100pct">
    <div class="f-left w-100pct pd-30px">
      <div class="columns bd-bt-whitesmoke">
        <div class="column">
          <span class="f-left f-s-28px f-w-500"> ∞ Vue Infinite Slide Bar</span>
        </div>
        <div class="column">
          <iframe class="f-right-tablet"
          src="https://ghbtns.com/github-btn.html?user=biigpongsatorn&repo=vue-infinite-slide-bar&type=star&count=true&size=large"
          frameborder="0"
          scrolling="0"
          width="160px"
          height="30px"/>
        </div>
      </div>
    </div>
    <div class="pd-hrzt-30px">
      🎚 Infinite slide bar component.
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
          <a href="https://npmjs.com/package/vue-infinite-slide-bar"><img src="https://img.shields.io/npm/v/vue-infinite-slide-bar.svg" alt="NPM version"></a>
          <a href="https://npmjs.com/package/vue-infinite-slide-bar"><img src="https://img.shields.io/npm/dm/vue-infinite-slide-bar.svg" alt="NPM downloads"></a>
          <a href="https://www.npmjs.com/package/vue-infinite-slide-bar"><img src="https://img.shields.io/npm/l/vue-infinite-slide-bar.svg" alt="License"></a>
          <a href="https://biigpongsatorn.github.io/#/vue-infinite-slide-bar"><img src="https://travis-ci.org/biigpongsatorn/biigpongsatorn.github.io.svg?branch=dev" alt="Demo Build Status"></a>
        </p>
      </div>
      <div class="my-title">
        Install
      </div>
      <highlight language="bash" class="highlight">
      npm install --save vue-infinite-slide-bar
      </highlight>
      <div>
        Or
      </div>
      <highlight language="bash" class="highlight">
      yarn add vue-infinite-slide-bar
      </highlight>
      <hr>
      <div class="my-title">
        Usage
      </div>
      <highlight language="javascript" class="highlight">
      import Vue from 'vue'
      import InfiniteSlideBar from 'vue-infinite-slide-bar'

      Vue.component('infinite-slide-bar', InfiniteSlideBar)
      </highlight>
      <div>
        Or
      </div>
      <highlight language="javascript" class="highlight">
      import InfiniteSlideBar from 'vue-infinite-slide-bar'

      export default {
        components: {
          InfiniteSlideBar
        }
      }
      </highlight>
      <hr>
    </div>
    <div class="my-title pd-hrzt-30px">
      Example
    </div>
    <div class="f-left w-100pct">
      <VueInfiniteSlideBarDemo/>
      <hr>
    </div>
    <div class="my-title pd-hrzt-30px">
      Options
    </div>
    <div class="f-left w-100pct pd-hrzt-30px">
      <b-table :data="propsData" :columns="propsColumns" striped></b-table>
      <hr>
    </div>
    <Support link="https://github.com/biigpongsatorn/vue-infinite-slide-bar"/>
    <Contributing/>
    <License/>
  </div>
</template>

<script>
import VueInfiniteSlideBarDemo from '../components/demos/vue-infinite-slide-bar'
import Contributing from '../components/contributing'
import License from '../components/license'
import Support from '../components/support'

export default {
  name: 'vue-infinite-slide-bar',
  data () {
    return {
      activeTab: 0,
      propsData: [
        { props: 'barStyle', type: 'Object', default: '-', description: 'Customize style of slide bar' },
        { props: 'duration', type: 'String', default: '12s', description: 'Speed of animation' },
        { props: 'direction', type: 'String', default: 'normal', description: 'Direction of animation (normal, reverse)' },
        { props: 'delay', type: 'String', default: '0s', description: 'Delay time before animation start' }
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
    VueInfiniteSlideBarDemo,
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
