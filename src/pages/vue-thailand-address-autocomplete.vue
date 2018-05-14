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
      📍 Autocomplete ที่อยู่ในประเทศไทยแบบสำเร็จรูป Base on <a target="_blank" href="https://github.com/Sellsuki/thai-address-database">thai-address-database</a>
      <div class="f-left w-100pct mg-t-15px">
        <b-tag> thailand-adress </b-tag>
        <b-tag> thailand </b-tag>
        <b-tag> address </b-tag>
        <b-tag> autocomplete </b-tag>
        <b-tag> vue-component </b-tag>
        <b-tag> thai </b-tag>
      </div>
      <div class="my-title">
        ติดตั้ง
      </div>
      <div class="markdown">
        npm install vue-thailand-address-autocomplete --save
      </div>
      <div>
        หรือ
      </div>
      <div class="markdown">
        yarn add vue-thailand-address-autocomplete
      </div>
      <div class="my-title">
        การใช้งาน
      </div>
      <div class="markdown">
        import ThailandAutoComplete from 'vue-thailand-address-autocomplete'
        Vue.component('ThailandAutoComplete', ThailandAutoComplete)
      </div>
      <div>
        หรือ
      </div>
      <div class="markdown">
        import ThailandAutoComplete from 'vue-thailand-address-autocomplete'

        export default {
          components: {
            ThailandAutoComplete
          }
        }
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-thailand-address-autocomplete'
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
