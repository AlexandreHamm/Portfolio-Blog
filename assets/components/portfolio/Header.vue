<template>
  <header class="portfolio__block__header">
    <h1 class="portfolio__block__header__title">hamm</h1>
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

        &__title{
          margin: 0 5rem;
          font-size: 8.5rem;
          font-weight: 500;
          letter-spacing: 1px;
          font-family: 'Blackout';
          color: #FFF;
          opacity: .5;
          transition: .3s;

          &:hover{
            opacity: 1;
            transition: .1s;
          }
        }
      }
    }
  }
</style>