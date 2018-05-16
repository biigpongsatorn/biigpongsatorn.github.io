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
      <div class="markdown">
        npm install vue-thailand-address-autocomplete --save
      </div>
      <div>
        Or
      </div>
      <div class="markdown">
        yarn add vue-thailand-address-autocomplete
      </div>
      <hr>
      <div class="my-title">
        Usage
      </div>
      <highlight language="javascript" class="highlight">
        import ThailandAutoComplete from 'vue-thailand-address-autocomplete'

        Vue.component('ThailandAutoComplete', ThailandAutoComplete)
      </highlight>
      <div>
        Or
      </div>
      <highlight language="javascript" class="highlight">
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
    <div class="my-title pd-hrzt-30px">
      Support
    </div>
    <div class="f-left w-100pct pd-hrzt-30px">
      <div class="markdown">
        If you like this project, You can support me in a small way with starring ⭐ <a href="https://github.com/biigpongsatorn/vue-thailand-address-autocomplete">this project</a>.
      </div>
      <hr>
    </div>
    <div class="my-title pd-hrzt-30px">
      Contributing
    </div>
    <div class="f-left w-100pct pd-hrzt-30px">
      <div class="markdown">
        1. Fork this repo.<br>
        2. git checkout -b feature-name<br>
        3. npm install<br>
        4. npm run dev<br>
        5. git commit -m "Feature name"<br>
        6. git push origin feature-name<br>
        7. Create pull request.
      </div>
      <hr>
    </div>
    <div class="my-title pd-hrzt-30px">
      License <a href="https://opensource.org/licenses/MIT">MIT</a>
    </div>
  </div>
</template>

<script>
import VueThailandAddressAutocompleteDemo from '../components/demos/vue-thailand-address-autocomplete'
export default {
  name: 'vue-thailand-address-autocomplete',
  data () {
    return {
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
    VueThailandAddressAutocompleteDemo
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
