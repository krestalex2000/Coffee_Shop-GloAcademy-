<template>
  <router-link :to="link">
    {{ text }}
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>