<template>
  <div
    id="accordion"
    role="tablist"
    aria-multiselectable="true"
    class="card-collapse"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  props: {
    animationDuration: {
      type: Number,
      default: 250,
    },
    multipleActive: {
      type: Boolean,
      default: true,
    },
    activeIndex: {
      type: Number,
      default: -1,
    },
  },
  provide() {
    return {
      animationDuration: this.animationDuration,
      multipleActive: this.multipleActive,
      addItem: this.addItem,
      removeItem: this.removeItem,
      deactivateAll: this.deactivateAll,
    };
  },
  data() {
    return {
      items: [],
    };
  },
  watch: {
    activeIndex() {
      this.activateItem();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.activateItem();
    });
  },
  methods: {
    addItem(item) {
      const index = this.$slots.default.indexOf(item.$vnode);
      if (index !== -1) {
        this.items.splice(index, 0, item);
      }
    },
    removeItem(item) {
      const { items } = this;
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
      }
    },
    deactivateAll() {
      this.items.forEach((item) => {
        item.active = false;
      });
    },
    activateItem() {
      if (this.activeIndex !== -1) {
        this.items[this.activeIndex].active = true;
      }
    },
  },
};
</script>

<style scoped></style>
