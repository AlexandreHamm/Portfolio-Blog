<script>
export default {
  computed: {
    checkURL(){
      return window.location.href.indexOf("dashboard") == -1;
    }
  }
}
</script>

<template>
  <header class="portfolio__block__header" v-if='checkURL'>
    <h1 class="portfolio__block__header__title">
      <span>hamm</span> 
    </h1>
  </header>
</template>

<style lang="scss" scoped>
  @import '../../base.css';
  @font-face {
    font-family: 'Blackout';
    src: url(../../fonts/blackout.ttf);
  }

  .portfolio{
    &__block{
      &__header{
        width: 40%;
        height: 150px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        cursor: default;
        overflow: hidden;
        transition: 2s ease-out;
        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
        transform: translateX(50%);

        &__title{
          margin: 0 5rem;
          font-size: 8.5rem;
          font-weight: 500;
          letter-spacing: 1px;
          font-family: 'Blackout';
          color: #FFF;
          opacity: .5;
          transition: .2s;

          &:hover{
            opacity: 1;
            transition: .1s;
          }
        }
      }
    }
  }
</style>