<script>
export default {
  mounted: function(){
    this.ifProjectVisible();

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
  },
  methods: {
    ifProjectVisible() {
      document.querySelector('.portfolio__block__projects__scroll').addEventListener('scroll', function() {
        document.querySelectorAll('.portfolio__block__projects__scroll__wrapper__item').forEach( (element) => {
          let position = element.getBoundingClientRect();
          let container = document.querySelector('.portfolio__block__projects__scroll').getBoundingClientRect();

          if(position.left <= container.right || position.right <= container.left) {
            if(!element.classList.contains('active')){
              element.animate([{
                transform: 'translateX(-240%) translateY(100%)',
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
            }
            element.classList.add('active');
          }else{
            if(element.classList.contains('active')){
              element.classList.remove('active');
            }
          }
        });
      });
    }
  }
}
</script>

<template>
  <div class="portfolio__block__projects__scroll__wrapper">
    <div class="portfolio__block__projects__scroll__wrapper__item">
        <input type="checkbox" name="projectname" id="projectname">
        <label for="projectname" class="projects__wrapper">
          <img src="../../projects/site1.jpg" alt="" draggable="false">
        </label>
    </div>
    <div class="portfolio__block__projects__scroll__wrapper__item">
        <input type="checkbox" name="projectname" id="projectname">
        <label for="projectname" class="projects__wrapper">
          <img src="../../projects/site2.jpg" alt="" draggable="false">
        </label>
    </div>
    <div class="portfolio__block__projects__scroll__wrapper__item">
        <input type="checkbox" name="projectname" id="projectname">
        <label for="projectname" class="projects__wrapper">
          <!-- <img src="https://www.a2mo.fr/wp-content/uploads/2021/10/placeholder1.png" alt="" draggable="false"> -->
        </label>
    </div>
    <div class="portfolio__block__projects__scroll__wrapper__item">
        <input type="checkbox" name="projectname" id="projectname">
        <label for="projectname" class="projects__wrapper">
          <!-- <img src="https://www.a2mo.fr/wp-content/uploads/2021/10/placeholder1.png" alt="" draggable="false"> -->
        </label>
    </div>
    <div class="portfolio__block__projects__scroll__wrapper__item">
        <input type="checkbox" name="projectname" id="projectname">
        <label for="projectname" class="projects__wrapper">
          <!-- <img src="https://www.a2mo.fr/wp-content/uploads/2021/10/placeholder1.png" alt="" draggable="false"> -->
        </label>
    </div>
    <div class="portfolio__block__projects__scroll__wrapper__item">
        <input type="checkbox" name="projectname" id="projectname">
        <label for="projectname" class="projects__wrapper">
          <!-- <img src="https://www.a2mo.fr/wp-content/uploads/2021/10/placeholder1.png" alt="" draggable="false"> -->
        </label>
    </div>
  </div> 
</template>

<style lang="scss" scoped>
  @import "../../_shared.scss";

  .portfolio{

    &__block{

      &__projects{

        &__scroll{
          scroll-snap-type: y mandatory;

          &__wrapper{
            position: absolute;
            bottom: 0;
            height: 150px;
            width: auto;
            transform: rotate(90deg) translateX(50%);
            transform-origin: center;
            display: flex;
            justify-content: center;
            align-items: center;

            &__item{
              width: 50px;
              height: 80px;
              margin: 0 1rem 0 0;
              overflow: hidden;
              opacity: .5;
              transition: height .2s ease-out;
              background: #fff;
              filter: grayscale(1);
              transform: translate(-240%, 0);
              
              &.default{
                opacity: .5;
                transform: translate(-240%, 150px);
              }

              & > label{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                cursor: pointer;

                &:checked{
                  width: 100vw;
                  height: 100vh;
                }

                & > img{
                  height: 100%;
                }

              }

              &:hover{
                height: 150px;
                opacity: 1;
                filter: grayscale(0);
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