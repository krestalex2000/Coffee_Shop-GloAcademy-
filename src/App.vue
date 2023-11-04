<template>
  <div class="wrapper">
    <router-view></router-view>

    <footer-component />
  </div>
</template>

<script>
import HeroView from '@/views/HeroView.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { v4 as uuidv4 } from 'uuid';

export default {
  components: {HeroView, FooterComponent}
}
</script>

<style lang="scss">
  div {
    span {
      color: green;
    }
  }
</style>
