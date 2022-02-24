<script setup>
import Header from './components/portfolio/Header.vue'
import Links from './components/Links.vue'
import Socials from './components/Socials.vue'
</script>

<template>
  <section>
    <div class="portfolio">
      <div class="portfolio__block">
        <Header />
        <RouterView />
      </div>
      <Socials />
    </div>
    <Links />
  </section>
</template>

<style lang="scss">

#app{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
section{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.portfolio{
  position: relative;
  width: 64%;
  height: 100%;
  display: flex;
  justify-content: center;
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
</style>
