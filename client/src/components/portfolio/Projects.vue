<template>
  <main class="portfolio__block__projects">
    <div class="portfolio__block__projects__scroll">
      <div class="portfolio__block__projects__scroll__wrapper">
        <div class="portfolio__block__projects__scroll__wrapper__item">
            <input type="checkbox" name="projectname" id="projectname">
            <label for="projectname" class="projects__wrapper">
              <img src="https://www.a2mo.fr/wp-content/uploads/2021/10/placeholder1.png" alt="" draggable="false">
            </label>
        </div>
        <div class="portfolio__block__projects__scroll__wrapper__item">
            <input type="checkbox" name="projectname" id="projectname">
            <label for="projectname" class="projects__wrapper">
              <img src="https://www.a2mo.fr/wp-content/uploads/2021/10/placeholder1.png" alt="" draggable="false">
            </label>
        </div>
        <div class="portfolio__block__projects__scroll__wrapper__item">
            <input type="checkbox" name="projectname" id="projectname">
            <label for="projectname" class="projects__wrapper">
              <img src="https://www.a2mo.fr/wp-content/uploads/2021/10/placeholder1.png" alt="" draggable="false">
            </label>
        </div>
        <div class="portfolio__block__projects__scroll__wrapper__item">
            <input type="checkbox" name="projectname" id="projectname">
            <label for="projectname" class="projects__wrapper">
              <img src="https://www.a2mo.fr/wp-content/uploads/2021/10/placeholder1.png" alt="" draggable="false">
            </label>
        </div>
        <div class="portfolio__block__projects__scroll__wrapper__item">
            <input type="checkbox" name="projectname" id="projectname">
            <label for="projectname" class="projects__wrapper">
              <img src="https://www.a2mo.fr/wp-content/uploads/2021/10/placeholder1.png" alt="" draggable="false">
            </label>
        </div>
        <div class="portfolio__block__projects__scroll__wrapper__item">
            <input type="checkbox" name="projectname" id="projectname">
            <label for="projectname" class="projects__wrapper">
              <img src="https://www.a2mo.fr/wp-content/uploads/2021/10/placeholder1.png" alt="" draggable="false">
            </label>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @import "@/assets/_shared.scss";

  .portfolio{

    &__block{

      &__projects{
        position: relative;
        width: 50%;
        height: 150px;

        &__scroll{
          position: relative;
          width: 150px;
          height: 24vw;
          overflow-y: scroll;
          overflow-x: hidden;
          transform: rotate(-90deg) translateX(-15rem);
          transform-origin: top left;
          display: flex;
          justify-content: center;
          align-items: center;

          &__wrapper{
            position: absolute;
            bottom: 0;
            height: 150px;
            width: auto;
            transform: rotate(90deg);
            transform-origin: center;
            display: flex;
            justify-content: center;
            align-items: center;

            &__item{
              width: 50px;
              height: 85px;
              margin: 0 1rem 0 0;
              // clip-path: polygon(0 0, 0 100%, 49% 100%, 49% 63%, 51% 63%, 51% 100%, 100% 100%, 100% 25%, 49% 25%, 49% 0);
              overflow: hidden;
              opacity: .5;
              transition: .2s;

              & > label{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;

                & > img{
                  height: 100%;
                }

              }

              &:hover{
                height: 150px;
                opacity: 1;
                transition: .2s;
              }

            }

          }

        }

      }

    }

  }

  input[type="checkbox"]{
    display: none;
  }
  input:checked ~ label{
    color: blue;
  }
</style>