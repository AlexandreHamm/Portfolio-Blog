<script setup>
import { gsap } from "gsap";
import Header from './components/portfolio/Header.vue'
import Links from './components/Links.vue'
import Socials from './components/Socials.vue'

window.onload = function(){
  document.querySelector('.portfolio__block__header').style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
  if(window.location.href.indexOf('dashboard') == -1 || window.location.href.indexOf('blog') == -1){
    setTimeout(() => {
      document.querySelector('.portfolio__block__header').style.transition = ".5s ease-out";
      setTimeout(() => {
        document.querySelector('.portfolio__block__header').style.transform = "translateX(0)";
      }, 300)
    }, 1400)

    setTimeout(() => {
      document.querySelectorAll('.socials > *').forEach((el) => {
        el.style.transform = "translateY(0)";
      });
      document.querySelector('.links > a').style.transform = "translateY(0)";
    }, 2200);
    
    setTimeout(() => {
      document.querySelector('.portfolio__block__projects').style.display = "block";
      document.querySelectorAll('.portfolio__block__projects__scroll__wrapper__item').forEach((el, i) => {
        if(el.getBoundingClientRect().left <= document.querySelector('.portfolio__block__projects__scroll').getBoundingClientRect().right || el.getBoundingClientRect().right <= document.querySelector('.portfolio__block__projects__scroll').getBoundingClientRect().left){
          el.classList.add('active');
          el.classList.add('default');
          setTimeout(() => {
          el.animate([{
              transform: 'translateX(-240%) translateY(150px)',
              opacity: '0'
            },
            {
              transform: 'translateX(-240%) translateY(0)',
              opacity: '.5'
            }],
            {
              duration: 500,
              easing: 'ease-out',
            });
            el.classList.remove('default');
          }, i * 300)
        }
      })
    }, 2500);
  }
}
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
    height: 40%;
    margin: 2rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
