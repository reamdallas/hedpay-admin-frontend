<template>
  <li :class="{ 'timeline-inverted': inverted }">
    <slot name="badge">
      <div
        class="timeline-badge"
        :class="badgeType"
      >
        <i :class="badgeIcon" />
      </div>
    </slot>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <slot name="header" />
      </div>
      <div
        v-if="$slots.content"
        class="timeline-body"
      >
        <slot name="content" />
      </div>
      <div
        v-if="$slots.footer"
        class="timeline-footer"
      >
        <slot name="footer" />
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: 'TimeLineItem',
  props: {
    inverted: Boolean,
    badgeType: {
      type: String,
      default: 'success',
    },
    badgeIcon: {
      type: String,
      default: '',
    },
  },
};
</script>
<style></style>
