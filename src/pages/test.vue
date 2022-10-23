

<template>
  <div>{{count}} {{test.test}}</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '../store/test'
import { useRoomStore } from '../room/store/room'
const count = ref('')
count.value = 'hello word'
const test = useStore()
const room = useRoomStore()
console.log(room, 'room')
</script>
<style scoped>

</style>
