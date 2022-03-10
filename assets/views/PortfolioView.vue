<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Projects from '../components/portfolio/Projects.vue'
</script>

<template>
  <main class="portfolio__block__projects">
    <div class="portfolio__block__projects__scroll">
      <Projects />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.portfolio{

  &__block{

    &__projects{
      display: none;
      position: relative;
      width: 50%;
      height: 150px;
      overflow: hidden;

      &__scroll{
        position: relative;
        width: 150px;
        height: 24vw;
        overflow-y: scroll;
        scroll-behavior: smooth;
        overflow-x: hidden;
        transform: rotate(-90deg) translateX(-100%);
        transform-origin: top left;
        display: flex;
        justify-content: center;
        align-items: center;
       }
    }
  }
}
</style>
