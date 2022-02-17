<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/portfolio/Header.vue'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/base.css';
@import "@/assets/_shared.scss";

#app{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
