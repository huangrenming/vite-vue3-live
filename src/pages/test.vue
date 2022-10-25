

<template>
  <div>{{count}} {{test.test}}</div>
  <span @click="setAppID">appID</span>
  {{classroom.appId}}
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useStore } from '../store/test'
import { room, deviceLib } from '../room/store/room'
const count = ref('')
count.value = 'hello word'
const test = useStore()
const { classroom } = storeToRefs(room)
const setAppID = () => {
  deviceLib.setAppID('aa123456')
}

console.log(room, 'room')
</script>
<style scoped>

</style>
