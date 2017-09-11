<template>
  <div class="ZoneSelector">
    <select v-model="position.province" @change="change('province')">
      <option v-for="(p, index) in zones.provinces" :key="index" :value="p">{{p.b}}</option>
    </select>
    <select v-model="position.city" @change="change('city')">
      <option v-for="(c, index) in zones.cities" :key="index" :value="c">{{c.b}}</option>
    </select>
    <select v-model="position.district">
      <option v-for="(d, index) in zones.districts" :key="index" :value="d">{{d.b}}</option>
    </select>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['value'],
  data: () => ({
    zones: {
      provinces: [],
      cities: [],
      districts: []
    },
    position: {
      province: null,
      city: null,
      district: null
    }
  }),
  created () {
    let that = this
    axios.get('/zone.json').then((res) => {
      if (res.status === 200 && res.data) {
        that.zones.provinces = res.data
        that.position.province = that.zones.provinces[0]
        that.zones.cities = that.position.province.c
        that.position.city = that.zones.cities[0]
        that.zones.districts = that.position.city.d
        that.position.district = that.zones.districts[0]
      }
    })
  },
  methods: {
    change (type) {
      let that = this
      if (type === 'province') {
        that.zones.cities = that.position.province.c
        that.position.city = that.zones.cities[0]
        that.zones.districts = that.position.city.d
        that.position.district = that.zones.districts[0]
      } else if (type === 'city') {
        that.zones.districts = that.position.city.d
        that.position.district = that.zones.districts[0]
      }
      that.$emit('input', that.position)
    }
  }
}
</script>

<style lang="scss" scoped>
.ZoneSelector {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  select {
    display: block;
    flex: 1;
    height: 36px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  select:nth-child(2) {
    margin: 0 12px;
  }
}
</style>
