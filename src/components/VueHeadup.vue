<template>
  <transition
    enter-from-class="-translate-y-full"
    enter-to-class="translate-y-0"
    leave-from-class="translate-y-0"
    leave-to-class="-translate-y-full"
  >
    <div
      v-if="headup.display"
      class="fixed flex top-0 inset-x-0 top-50 z-50 px-6 py-4 gap-4 border-0 shadow-lg justify-between items-center transition-all duration-300"
      :class="typeToBgClass(headup.type)"
      :style="{
        height: headup.height ? headup.height : 'auto'
    }"
    >
      <span class="flex w-6 h-6" v-html="headup.icon"> </span>
      <span
        class="flex-grow text-lg font-semibold break-all whitespace-pre-line"
      >
        {{ headup.content }}
      </span>
      <button
        @click="closeHeadup()"
        type="button"
        class="flex w-4 h-4 bg-transparent justify-center items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </button>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, reactive } from "vue";

import emitter from "@/utils/emitter";
import { typeToBgClass, typeToIcon } from "@/utils/parser";

const headup = reactive({ display: false, content: "", type: "default", height: "auto" });

let headupTimeout;

const showHeadup = (params) => {
  closeHeadup();
  let closeTime = headup.display ? 300 : 0;
  setTimeout(() => {
    headup.display = true;
    headup.content = params.content;
    headup.type = params.type;
    headup.icon = params.icon ? params.icon : typeToIcon(headup.type);
    headup.height = params.height;

    let duration = params.duration ? params.duration : 3000;

    headupTimeout = setTimeout(() => {
      closeHeadup();
    }, duration);
  }, closeTime);
};

const closeHeadup = () => {
  if (headup.display) {
    headup.display = false;
    clearTimeout(headupTimeout);
  }
};

onMounted(() => {
  emitter.on("show-headup", showHeadup);
  emitter.on("close-headup", closeHeadup);
});
</script>
