<template>
  <div class="f-left w-100pct">
    <div class="f-left w-100pct bg-cl-light pd-30px bd-rd-5px">
      <div class="w-50pct-tablet">
        <thailand-autocomplete v-model="district" type="district" @select="select" label="ตำบล" size="small" placeholder="ตำบล..."/>
        <thailand-autocomplete v-model="amphoe" type="amphoe" @select="select" label="อำเภอ" color="#42b883" placeholder="อำเภอ..."/>
        <thailand-autocomplete v-model="province" type="province" @select="select" label="จังหวัด" size="medium" color="#35495e" placeholder="จังหวัด..."/>
        <thailand-autocomplete v-model="zipcode" type="zipcode" @select="select" label="รหัสไปรษณีย์" size="large" color="#00a4e4" placeholder="รหัสไปรษณีย์..."/>
      </div>
    </div>
    <div class="f-left w-100pct">
      <highlight language="html" class="highlight">{{ templateCode.html }}
      </highlight>
      <highlight language="javascript" class="highlight">{{ templateCode.script }}
      </highlight>
    </div>
  </div>
</template>

<script>
import ThailandAutoComplete from 'vue-thailand-address-autocomplete'
export default {
  name: 'app',
  data () {
    return {
      district: '',
      amphoe: '',
      province: '',
      zipcode: '',
      templateCode: {
        html: `
    <template>
      <thailand-autocomplete v-model="district" type="district" @select="select" label="ตำบล" size="small" placeholder="ตำบล..."/>
      <thailand-autocomplete v-model="amphoe" type="amphoe" @select="select" label="อำเภอ" color="#42b883" placeholder="อำเภอ..."/>
      <thailand-autocomplete v-model="province" type="province" @select="select" label="จังหวัด" size="medium" color="#35495e" placeholder="จังหวัด..."/>
      <thailand-autocomplete v-model="zipcode" type="zipcode" @select="select" label="รหัสไปรษณีย์" size="large" color="#00a4e4" placeholder="รหัสไปรษณีย์..."/>
    </template>`,
        script: `
    export default {
      data () {
        return {
          district: '',
          amphoe: '',
          province: '',
          zipcode: ''
        }
      },
      methods: {
        select (address) {
          this.district = address.district
          this.amphoe = address.amphoe
          this.province = address.province
          this.zipcode = address.zipcode
        }
      }
    }`
      }
    }
  },
  methods: {
    select (address) {
      this.district = address.district
      this.amphoe = address.amphoe
      this.province = address.province
      this.zipcode = address.zipcode
    }
  },
  components: {
    ThailandAutoComplete
  }
}
</script>
