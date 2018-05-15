<template>
  <div class="f-left w-100pct">
    <ThailandAutoComplete
      v-model="district"
      type="district"
      @select="select"
      label="ตำบล"
      color="#42b883"
      size="small"
      placeholder="ตำบล..."/>
    <ThailandAutoComplete v-model="amphoe" type="amphoe" @select="select" label="อำเภอ" placeholder="อำเภอ..."/>
    <ThailandAutoComplete v-model="province" type="province" @select="select" label="จังหวัด" size="medium" color="#35495e" placeholder="จังหวัด..."/>
    <ThailandAutoComplete v-model="zipcode" type="zipcode" @select="select" label="รหัสไปรษณีย์" size="large" color="#00a4e4" placeholder="รหัสไปรษณีย์..."/>
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
  },
  components: {
    ThailandAutoComplete
  }
}
</script>
