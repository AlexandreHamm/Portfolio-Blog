<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Projects from '../components/portfolio/Projects.vue'
</script>

<template>
    <Transition name="port" mode="out-in">
      <Projects />
    </Transition>
</template>

<style>
    .port-enter-active {
      animation: clip-in 1s ease-out;
    }
    .port-leave-active {
      animation: clip-in 1s ease-out reverse;
    }

    /* .port-enter-from,
    .port-leave-to {
      transform: translateX(100%);
        opacity: 0;
    } */

    @keyframes clip-in {
      from{
        clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
      }
      to{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }
</style>
