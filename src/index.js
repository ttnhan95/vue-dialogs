import VueModal from "@/components/VueModal.vue";
import VueHeadup from "@/components/VueHeadup.vue";
import VueToast from "@/components/VueToast.vue";
import emitter from "@/utils/emitter";
import "@/assets/css/index.css";

const VueDialogs = {
  install(Vue = {}) {
    Vue.component("VueModal", VueModal);
    Vue.component("VueHeadup", VueHeadup);
    Vue.component("VueToast", VueToast);

    Vue.directive("modal-toggle", {
      mounted(el, binding) {
        el.addEventListener("click", () => {
          emitter.emit("toggle-modal", binding.value);
        });
      },
    });

    Vue.mixin({
      methods: {
        VDOpenModal: function (id) {
          emitter.emit("open-modal", id);
        },
        VDOpenDataModal: function (params) {
          emitter.emit("open-data-modal", params);
        },
        VDCloseModal: function () {
          emitter.emit("close-modal");
        },
        VDShowHeadup: function (params) {
          emitter.emit("show-headup", params);
        },
        VDCloseHeadup: function () {
          emitter.emit("close-headup");
        },
        VDPushToast: function (params) {
          emitter.emit("push-toast", params);
        },
        VDCloseToast: function (id) {
          emitter.emit("close-toast", id);
        },
        VDClearAllToasts: function () {
          emitter.emit("clear-all-toasts");
        },
      },
    });
  },
};

export default VueDialogs;
