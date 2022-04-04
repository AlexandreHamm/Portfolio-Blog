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

    }, 1000)
  },
}
</script>
<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

window.onload = function(){

  if(window.location.href.indexOf('dashboard') == -1 && window.location.href.indexOf('blog') == -1){
    document.querySelectorAll('.title > span').forEach((el, i) => {
      setTimeout(() => {
        el.style.transform = "translateY(0)";
      }, i * 200);
    })

    setTimeout(() => {
      document.querySelector('.socials > a').style.transform = "translateY(0)";
      setTimeout(() => {
        document.querySelectorAll('.socials__links > a').forEach((el, i) => {
          setTimeout(() => {
            el.style.transform = "translateY(0)";
          }, i * 200);
        });
      }, 500);
    }, 1900);
  }
}
</script>

<template>
  <main>
    <Header />
    <section class="container">
      <RouterView v-if="isLoaded" v-slot="{ Component }">
        <Transition name="clip" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </section>
    <Footer />
  </main>
</template>

<style>

#app{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
main{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container{
  width: 100%;
  height: calc(100% - 220px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
}

.clip-enter-active {
  animation: clip-in 1s ease-out;
}
.clip-leave-active {
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
