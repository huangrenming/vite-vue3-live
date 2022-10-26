<template>
  <div>{{ count }} {{ test.test }}</div>
  <span @click="setAppID">appID: {{ classroom.appId }}</span>
  <div class="swiper-w">
    <swiper
      :slides-per-view="per"
      :space-between="50"
      :modules="modules"
      navigation
      :zoom="true"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="item in items" :key="item" class="swiper-slide-item">{{
        item
      }}</swiper-slide>
      <!-- <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide> -->
    </swiper>
  </div>

  <span @click="addPre">添加item</span> <br />
  <span>减少item</span>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useStore } from "../store/test";
import { room, deviceLib } from "../room/store/room";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";

const count = ref("");
count.value = "hello word";
const test = useStore();
const { classroom } = storeToRefs(room);
const setAppID = () => {
  const id = Math.random().toString(16);
  deviceLib.setAppID(id);
};
function onSwiper(swiper: any) {
  console.log(swiper, "onSwiper");
}

function onSlideChange(swiper: any) {
  console.log(swiper, "slide change");
}

const items = ref([]);
for (let i = 0; i <= 15; i++) {
  var msg = `Slide ${i}` || "";
  items.value.push(msg);
}

const modules = [Navigation, Scrollbar, A11y];
function add() {
  var mi = "Slide " + items.value.length;
  items.value.unshift(mi);
}

let per = ref(3);
let warpperW = ref(600);
function addPre() {
  warpperW.value = 1200;
  per.value = 1200 / 200;
}
// console.log(room, 'room')
</script>
<style scoped>
.swiper-w {
  width: 600px;
  border: #fa7c7c 1px solid;
}
</style>
