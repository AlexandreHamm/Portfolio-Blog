<script>
export default {
  data() {
    return {
      isLoaded: false
    }
  },
  mounted(){
    setTimeout(() => {
      this.isLoaded = true
    }, 2000)
  },
}
</script>
<script setup>
import Header from './components/portfolio/Header.vue'
import Links from './components/Links.vue'
import Socials from './components/Socials.vue'

window.onload = function(){

  if(window.location.href.indexOf('dashboard') == -1 && window.location.href.indexOf('blog') == -1){
    document.querySelectorAll('.portfolio__block__header__title > span').forEach((el, i) => {
      setTimeout(() => {
        el.style.transform = "translateY(0)";
      }, i * 200);
    })
    setTimeout(() => {
      document.querySelector('.portfolio__block__header').style.transition = ".5s ease-out";
      setTimeout(() => {
        document.querySelector('.portfolio__block__header').style.transform = "translateX(0)";
      }, 300)
    }, 1700)

    setTimeout(() => {
      document.querySelector('.socials > a').style.transform = "translateY(0)";
      setTimeout(() => {
        document.querySelectorAll('.socials__links > a').forEach((el, i) => {
          setTimeout(() => {
            el.style.transform = "translateY(0)";
          }, i * 200);
        });
      }, 500);
      // document.querySelector('.links > a').style.transform = "translateY(0)";
    }, 1900);
  }
}
</script>

<template>
  <section>
    <div class="portfolio">
      <div class="portfolio__block">
        <Header />
        <RouterView v-if="isLoaded" />
      </div>
      <Socials />
    </div>
    <!-- <Links /> -->
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
    height: 40%;
    margin: 2rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
