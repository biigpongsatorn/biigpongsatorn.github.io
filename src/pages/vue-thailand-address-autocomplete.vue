<template>
  <div class="f-left w-100pct">
    <div class="f-left w-100pct pd-30px">
      <div class="columns bd-bt-whitesmoke">
        <div class="column">
          <span class="f-left f-s-28px f-w-500"> 🇹🇭 vue-thailand-address-autocomplete</span>
        </div>
        <div class="column">
          <iframe class="f-right-tablet"
          src="https://ghbtns.com/github-btn.html?user=biigpongsatorn&repo=vue-thailand-address-autocomplete&type=star&count=true&size=large"
          frameborder="0"
          scrolling="0"
          width="160px"
          height="30px"/>
        </div>
      </div>
    </div>
    <div class="pd-hrzt-30px">
      📍 Autocomplete Thailand address Base on <a target="_blank" href="https://github.com/Sellsuki/thai-address-database">thai-address-database</a>
      <div class="f-left w-100pct mg-t-15px">
        <p>
          <a href="https://npmjs.com/package/vue-thailand-address-autocomplete"><img src="https://img.shields.io/npm/v/vue-thailand-address-autocomplete.svg" alt="NPM version"></a>
          <a href="https://npmjs.com/package/vue-thailand-address-autocomplete"><img src="https://img.shields.io/npm/dm/vue-thailand-address-autocomplete.svg" alt="NPM downloads"></a>
          <a href="https://www.npmjs.com/package/vue-thailand-address-autocomplete"><img src="https://img.shields.io/npm/l/vue-thailand-address-autocomplete.svg" alt="License"></a>
          <a href="https://www.npmjs.com/package/vue-thailand-address-autocomplete"><img src="https://travis-ci.org/biigpongsatorn/biigpongsatorn.github.io.svg?branch=dev" alt="Demo Build Status"></a>
        </p>
      </div>
      <div class="f-left w-100pct mg-t-15px">
        <b-tag> thailand-adress </b-tag>
        <b-tag> thailand </b-tag>
        <b-tag> address </b-tag>
        <b-tag> autocomplete </b-tag>
        <b-tag> vue-component </b-tag>
        <b-tag> thai </b-tag>
      </div>
      <div class="my-title">
        Install
      </div>
      <highlight language="bash" class="highlight">
      npm install vue-thailand-address-autocomplete --save
      </highlight>
      <div>
        Or
      </div>
      <highlight language="bash" class="highlight">
      yarn add vue-thailand-address-autocomplete
      </highlight>
      <hr>
      <div class="my-title">
        Usage
      </div>
      <highlight language="javascript" class="highlight">
      // main.js
      import Vue from 'vue'
      import ThailandAutoComplete from 'vue-thailand-address-autocomplete'

      Vue.component('ThailandAutoComplete', ThailandAutoComplete)
      </highlight>
      <div>
        Or
      </div>
      <highlight language="javascript" class="highlight">
      // xxx.vue
      import ThailandAutoComplete from 'vue-thailand-address-autocomplete'

      export default {
        components: {
          ThailandAutoComplete
        }
      }
      </highlight>
      <hr>
    </div>
    <div class="my-title pd-hrzt-30px">
      Example
    </div>
    <div class="f-left w-100pct pd-hrzt-30px">
      <VueThailandAddressAutocompleteDemo/>
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
    <Support link="https://github.com/biigpongsatorn/vue-thailand-address-autocomplete"/>
    <Contributing/>
    <License/>
  </div>
</template>

<script>
import VueThailandAddressAutocompleteDemo from '../components/demos/vue-thailand-address-autocomplete'
import Contributing from '../components/contributing'
import License from '../components/license'
import Support from '../components/support'

export default {
  name: 'vue-thailand-address-autocomplete',
  data () {
    return {
      activeTab: 0,
      propsData: [
        { props: 'v-model', type: 'String', default: '-', description: 'Binding value' },
        { props: 'type', type: 'String', default: '-', description: 'ประเภทของ Field ประกอบด้วย district, amphoe, province, zipcode' },
        { props: 'label', type: 'String', default: '-', description: 'คำอธิบายของ Field' },
        { props: 'placeholder', type: 'String', default: '-', description: 'placeholder ของ Field' },
        { props: 'color', type: 'String', default: '-', description: 'สี border ของ Field ตอน Focus และสี background ของ List' },
        { props: 'size', type: 'String', default: 'default', description: 'ขนาดของ Field ประกอบด้วย small, default, medium, large' }
      ],
      propsColumns: [
        { field: 'props', label: 'Props', centered: true },
        { field: 'type', label: 'Type', centered: true },
        { field: 'default', label: 'Default', centered: true },
        { field: 'description', label: 'Description', centered: true }
      ],
      eventsData: [
        { events: 'select', type: 'Function', default: '(address) => {}', description: 'Return address data (type object) when select address, คืนค่า Object ที่อยู่เมื่อเลือกที่อยู่จาก Autocomplete' }
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
    VueThailandAddressAutocompleteDemo,
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
