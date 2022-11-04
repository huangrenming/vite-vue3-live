<template>
  <div>{{ count }} {{ test.test }}</div>
  <span @click="setAppID">appID: {{ classroom.appId }}</span>
  <div v-if="false" id="swiperID" class="swiper-w" ref="swiperID">
    <swiper
      :style="{ width: styleWidth + 'px' }"
      :slides-per-view="num"
      :space-between="10"
      :modules="modules"
      navigation
      :zoom="true"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="item in items" :key="item.id" class="swiper-slide-item">
        <div class="item" @click="add2(item.id)">{{ item }}</div>
      </swiper-slide>
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

  <span @click="add">添加item</span> <br />
  <span>减少item</span>
  <SwiperTest :items="items" :itemStyle="{ width: 240, height: 90 }" />
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useStore } from "../store/test";
import { room, deviceLib } from "../room/store/room";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperTest from "../components/SwiperTest.vue";

const count = ref("");
count.value = "hello word";
const test = useStore();
const { classroom } = storeToRefs(room);
const setAppID = () => {
  const id = Math.random().toString(16);
  deviceLib.setAppID(id);
};
function onSwiper(swiper: any) {
  // console.log(swiper, "onSwiper");
}

function onSlideChange(swiper: any) {
  // console.log(swiper, "slide change");
}
interface IData {
  id: number;
  a: string;
  b: string;
}
const items = ref<IData[]>([]);
for (let i = 0; i <= 2; i++) {
  var msg = `Slide ${i}` || "";
  items.value.push({
    id: i,
    a: msg,
    b: msg,
  });
}

const modules = [Navigation, Scrollbar, A11y];
function add() {
  var mi = "add Slide " + items.value?.length;
  items.value.unshift({
    id: items.value?.length,
    a: mi,
    b: mi,
  });
}

function add2(id: number) {
  const index = items.value.findIndex((v) => v.id === id);
  // items.value.splice(index, 1, Object.assign({}, items.value[index], {
  //   up: 'upate' + Math.random().toString(36)
  // }))

  items.value[index] = Object.assign({}, items.value[index], {
    up: "upate" + Math.random().toString(36),
  });
}

// const swiperID: HTMLElement = ref();
const styleWidth = ref(160);
const num = ref(1);
onMounted(() => {
  // const el = document.getElementById('swiperID')
  // if(el) {
  //   styleWidth.value = el.clientWidth
  // }
  // console.log(styleWidth, 'styleWidth');
  // const calc = items.value.length * 170;
  // styleWidth.value = calc;
  // num.value = items.value.length;
});

// console.log(room, 'room')
</script>
<style scoped>
.swiper-w {
  width: 1200px;
  border: #fa7c7c 1px solid;
}

.item {
  width: 160px;
  height: 90px;
  background: #ccc;
}
</style>
<style>
/* .swiper-w .swiper-button-prev[aria-disabled=true] {
  display: none;
}
.swiper-w .swiper-button-next[aria-disabled=true] {
  display: none;
}
.swiper-w:hover .swiper-button-prev[aria-disabled=false] {
  display: block;
  color: rgba(0, 0, 0, 0.55);
}
.swiper-w:hover .swiper-button-next[aria-disabled=false] {
  display: block;
  color: rgba(0, 0, 0, 0.55);
}
.swiper-w:hover .swiper-button-disabled{
  display: block;
  color: rgba(0, 0, 0, 0.55);
} */

/* .swiper-w div[aria-disabled=false] {
  display: none;
}
.swiper-w .swiper-button-disabled[aria-disabled=true] {
  display: none;
}
.swiper-w:hover div[aria-disabled=false] {
  display: block;
  color: rgba(0, 0, 0, 0.55);
}
.swiper-w:hover .swiper-button-disabled[aria-disabled=true]{
  display: block;
  color: rgba(0, 0, 0, 0.55);
}  */
</style>
