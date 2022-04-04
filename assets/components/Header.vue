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
  <header v-if='checkURL'>
    <h1 class="title">
      <span>h</span>
      <span>a</span>
      <span>m</span>
      <span>m</span>
    </h1>
  </header>
</template>

<style lang="scss" scoped>
  @import '../base.css';
  @font-face {
    font-family: 'Blackout';
    src: url(../fonts/blackout.ttf);
  }

  header{
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    overflow: hidden;

    & .title{
      margin: 0 5rem;
      font-size: 7.5rem;
      font-weight: 500;
      letter-spacing: 1px;
      font-family: 'Blackout';
      color: #FFF;
      opacity: .5;
      transition: .2s;
      display: flex;
      overflow: hidden;

      & > span{
        transform: translateY(150%);
        transition: transform 1s ease-out;
      }
      & > span:nth-child(even){
        transform: translateY(-150%);
      }

      &:hover{
        opacity: 1;
        transition: .1s;
      }
    }
  }
</style>