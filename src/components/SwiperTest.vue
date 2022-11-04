<template>
  <div id="swiperID" class="swiper-w" :class="{'swiper__hover': hoverClass}" ref="swiperID">
    <swiper
      :style="{ width: styleWidth + 'px' }"
      :slides-per-view="num"
      :space-between="space"
      :modules="modules"
      navigation
      :zoom="true"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide v-for="item in items" :key="item.id" class="swiper-slide-item">
        <div class="item" :style="{width: calcItemWidth + 'px', height: calcItemHeight + 'px'}" @click="add2(item.id)">{{ item }}</div>
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
</template>
<script setup lang="ts">
import { defineProps, onMounted, ref, toRefs, nextTick, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
const modules = [Navigation, Scrollbar, A11y];
interface IData {
  id: number;
  a: string;
  b: string;
}

const props = defineProps<{
  itemStyle?: {
    height: number
    width: number
  }
  spaceBetween?: number
  items: IData[];
}>();

const { items, itemStyle, spaceBetween } = toRefs(props);

function add2(id: number) {
  const index = items.value.findIndex((v) => v.id === id);
  // items.value.splice(index, 1, Object.assign({}, items.value[index], {
  //   up: 'upate' + Math.random().toString(36)
  // }))

  items.value[index] = Object.assign({}, items.value[index], {
    up: "upate" + Math.random().toString(36),
  });
}

const styleWidth = ref(160);
const num = ref(1);
const hoverClass = ref(false);
const calcItemWidth = itemStyle?.value?.width || 160
const calcItemHeight = itemStyle?.value?.height || 90
const space = spaceBetween?.value || 10
const calcWidth = calcItemWidth + space
function setStyleWidth() {
  nextTick(() => {
    const el = document.getElementById("swiperID");
    const clientWidth = el?.clientWidth || 160;
    const calc = items.value.length * calcWidth;
    if (calc > clientWidth) {
      num.value = parseInt(clientWidth / calcItemWidth + "");
      styleWidth.value = num.value * calcWidth;
      if(styleWidth.value > clientWidth) {
        num.value = num.value -1
        styleWidth.value = num.value * calcWidth;
      }
      hoverClass.value = true
    } else {
      styleWidth.value = calc;
      num.value = items.value.length;
      hoverClass.value = false
    }
  });
}
watch(items.value, () => {
  console.log(items);
  setStyleWidth();
});
onMounted(() => {
  setStyleWidth();
});
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
.swiper-w .swiper-button-prev {
  display: none;
}
.swiper-w .swiper-button-next {
  display: none;
}
.swiper__hover:hover .swiper-button-prev[aria-disabled="false"] {
  display: block;
  color: rgba(0, 0, 0, 0.55);
}
.swiper__hover:hover .swiper-button-next[aria-disabled="false"] {
  display: block;
  color: rgba(0, 0, 0, 0.55);
}
.swiper__hover:hover .swiper-button-disabled {
  display: block;
  color: rgba(0, 0, 0, 0.55);
}
</style>
