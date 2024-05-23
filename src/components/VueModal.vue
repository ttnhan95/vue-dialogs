<template>
  <transition
    enter-active-class="duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="modal.display && hasBackprop"
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-50"
      @click.stop="backpropCloseModal"
    ></div>
  </transition>

  <transition
    enter-active-class="ease-out duration-300"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="ease-in duration-200"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="modal.display"
      class="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full bg-gray-100 text-gray-800 text-left rounded-lg shadow-xl divide-y divide-gray-300 overflow-y-auto dark:bg-gray-600 dark:text-gray-100 dark:divide-gray-400 z-50"
      :style="{
        width: width ? width : '40%',
        height: height ? height : 'auto',
        resize: resizable ? 'both' : 'none',
      }"
    >
      <div
        v-if="modal.title"
        class="flex p-4 items-center justify-between"
        @mousedown.stop.prevent="onMouseDown"
      >
        <h3 class="text-xl font-semibold">
          {{ modal.title }}
        </h3>
        <button
          type="button"
          class="flex w-4 h-4 bg-transparent rounded-lg justify-center items-center"
          @click="closeModal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </button>
      </div>
      <!-- Modal body -->
      <div class="p-4" @mousedown.stop="onMouseDown">
        <div v-if="modal.content" v-html="modal.content"></div>
        <slot class="p-4" v-else></slot>
      </div>
      <div
        class="flex p-4 gap-2 justify-end items-center"
        v-if="modal.buttons.length > 0"
      >
        <button
          v-for="(button, i) in modal.buttons"
          :key="i"
          :class="[
            button.class
              ? button.class
              : 'px-5 py-3 text-sm font-medium rounded-lg ' +
                typeToBgClass(button.type),
          ]"
          @click="button.callback()"
        >
          {{ button.text }}
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { typeToBgClass } from "@/utils/parser";

import emitter from "@/utils/emitter";

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "",
  },
  buttons: {
    type: Array,
    default: [],
  },
  hasBackprop: {
    type: Boolean,
    default: true,
  },
  backpropClose: {
    type: Boolean,
    default: false,
  },
  draggable: {
    type: Boolean,
    default: true,
  },
  resizable: {
    type: Boolean,
    default: false,
  },
});

const modal = reactive({
  id: props.id,
  display: false,
  title: "",
  content: "",
  buttons: [],
});

const openDataModal = (params) => {
  if (params.id === modal.id) {
    modal.display = true;
    if (params.title) {
      modal.title = params.title;
    }
    if (params.content) {
      modal.content = params.content;
    }
    if (params.buttons) {
      modal.buttons = params.buttons;
    }
  }
};

const closeModal = () => {
  modal.display = false;
};

const backpropCloseModal = (e) => {
  if (props.backpropClose && e.target == e.currentTarget) {
    closeModal();
  }
};

const openModal = (id) => {
  if (id === modal.id) {
    modal.display = true;
  }
};

onMounted(() => {
  modal.title = props.title;
  modal.content = props.content;
  modal.buttons = props.buttons;

  emitter.on("open-modal", openModal);
  emitter.on("open-data-modal", openDataModal);
  emitter.on("close-modal", closeModal);
});

const dragElement = ref(undefined);
const isDragging = ref(false);

const position = reactive({
  x: 0,
  y: 0,
});

const onMouseDown = (e) => {
  if (props.draggable) {
    dragElement.value = e.target.parentElement;
    const rect = dragElement.value.getBoundingClientRect();
    position.x = e.pageX - rect.left - (rect.right - rect.left) / 2;
    position.y = e.pageY - rect.top + (rect.top - rect.bottom) / 2;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    isDragging.value = true;
  }
};

const onMouseMove = (e) => {
  if (isDragging.value) {
    dragElement.value.style.top = `${e.pageY - position.y}px`;
    dragElement.value.style.left = `${e.pageX - position.x}px`;
  }
};

const onMouseUp = (e) => {
  isDragging.value = false;
};
</script>
