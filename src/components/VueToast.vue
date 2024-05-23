<template>
  <div
    class="fixed h-100 overflow-y-clip overflow-x-hidden p-1 gap-1 z-50"
    :style="{
        width: width ? width : '400px',
        height: height ? height : 'auto'
    }"
    :class="positionToClass(position)"
  >
    <transition-group
      :enter-from-class="postionToTransition(position).enterFrom"
      :enter-to-class="postionToTransition(position).enterTo"
      :leave-from-class="postionToTransition(position).leaveFrom"
      :leave-to-class="postionToTransition(position).leaveTo"
    >
      <div
        class="relative flex px-3 py-4 gap-3 w-full rounded-lg shadow-md justify-between items-center transition-all duration-500"
        v-for="toast in computedData"
        :class="toastClass(toast.type)"
        :key="toast"
      >
        <span
          class="flex w-1/12 justify-center items-center"
          v-html="toast.icon"
        >
        </span>
        <span class="flex-grow w-5/6 break-all whitespace-pre-line">
          {{ toast.content }}
        </span>
        <button
          @click="closeToast(toast.id)"
          type="button"
          class="flex w-1/12 justify-center items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";

import emitter from "@/utils/emitter";
import {
  typeToBgClass,
  typeToIcon,
  positionToClass,
  postionToTransition,
} from "@/utils/parser";

const props = defineProps({
  position: {
    type: String,
    default: "top-right",
    validator: (value) => {
      return ["top-left", "top-right", "bottom-left", "bottom-right"].includes(
        value,
      );
    },
  },
  height: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "",
  },
});

const data = ref([]);
const id = ref(0);

const toastClass = (type) => {
  return typeToBgClass(type);
};

const computedData = computed(() => {
  return data.value.filter((item) => item.position === props.position);
});

const pushToast = (params) => {
  let toast = {
    id: id.value++,
    content: params.content + id.value,
    type: params.type,
    icon: params.icon ? params.icon : typeToIcon(params.type),
    position: params.position,
  };
  data.value.unshift(toast);

  let duration = params.duration ? params.duration : 3000;

  setTimeout(() => {
    closeToast(toast.id);
  }, duration);
};

const closeToast = (id) => {
  const index = data.value.findIndex((obj) => obj.id === id);
  data.value.splice(index, 1);
};

const clearAllToasts = () => {
  data.value = [];
};

onMounted(() => {
  emitter.on("push-toast", pushToast);
  emitter.on("close-toast", closeToast);
  emitter.on("clear-all-toasts", clearAllToasts);
});
</script>
