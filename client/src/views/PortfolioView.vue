<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/portfolio/Header.vue'
import Projects from '@/components/portfolio/Projects.vue'
import Socials from '@/components/Socials.vue'
</script>

<template>
  <section class="portfolio">
    <div class="portfolio__block">
        <Header />
        <Projects />
    </div>
    <!-- <Socials /> -->
    <!-- <footer>
      <h3>
      Read all my thoughts on my
      <RouterLink to="/blog">blog</RouterLink>.
    </h3>
    </footer> -->
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/base.css';
@import "@/assets/_shared.scss";

.portfolio{
  position: relative;
  width: 64%;
  display: flex;
  align-items: center;
  flex-direction: column;
  &__block{
    width: 100%;
    max-height: 150px;
    margin: 2rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
footer{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  & > a{
    width: 70px;
    font-size: 1.3rem;
    font-weight: 700;
    color: rgb(141, 224, 252);
    transition: .2s;
    text-align: center;

    &:hover{
      letter-spacing: 1px;
      transition: .2s;
    }
    h3{
    font-size: 1.7rem;
    color: #999;
  }
  }
}
</style>
