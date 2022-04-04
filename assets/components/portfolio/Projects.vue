<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const data = ref(null);

    function fetchData() {
        return fetch('/dashboard/projects/api', {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        return res.json();
      })
      .then(json => {
        data.value = json;
      })
    }

    onMounted(() => {
      fetchData();
    });

    return {
      data,
    };
  },
  // mounted(){

  //   this.ifProjectVisible();

  //   document.querySelector('.portfolio__block__projects').style.display = "block";
  //   document.querySelectorAll('.portfolio__block__projects__scroll__wrapper__item').forEach((el, i) => {
  //     if(el.getBoundingClientRect().left <= document.querySelector('.portfolio__block__projects__scroll').getBoundingClientRect().right || el.getBoundingClientRect().right <= document.querySelector('.portfolio__block__projects__scroll').getBoundingClientRect().left){
  //       el.classList.add('active');
  //       el.classList.add('default');
  //       setTimeout(() => {
  //       el.animate([{
  //           transform: 'translateX(-240%) translateY(150px)',
  //           opacity: '0'
  //         },
  //         {
  //           transform: 'translateX(-240%) translateY(0)',
  //           opacity: '.5'
  //         }],
  //         {
  //           duration: 500,
  //           easing: 'ease-out',
  //         });
  //         el.classList.remove('default');
  //       }, i * 300)
  //     }
  //   })
  // },
  // methods: {
  //   ifProjectVisible() {
  //     document.querySelector('.portfolio__block__projects__scroll').addEventListener('scroll', function() {
  //       document.querySelectorAll('.portfolio__block__projects__scroll__wrapper__item').forEach( (element) => {
  //         let position = element.getBoundingClientRect();
  //         let container = document.querySelector('.portfolio__block__projects__scroll').getBoundingClientRect();

  //         if(position.left <= container.right || position.right <= container.left) {
  //           if(!element.classList.contains('active')){
  //             element.animate([{
  //               transform: 'translateX(-240%) translateY(100%)',
  //               opacity: '0'
  //             },
  //             {
  //               transform: 'translateX(-240%) translateY(0)',
  //               opacity: '.5'
  //             }],
  //             {
  //               duration: 500,
  //               easing: 'ease-out',
  //             });
  //           }
  //           element.classList.add('active');
  //         }else{
  //           if(element.classList.contains('active')){
  //             element.classList.remove('active');
  //           }
  //         }
  //       });
  //     });
  //   }
  // }
}
</script>

<template>
  <div class="wrapper" v-if="data && data.length">
    <div class="project" v-for="project of data" :key="project.id">
        <div class="test">
          <img src="../../projects/untitled-1.png" alt="" draggable="false">
        </div>
    </div>
  </div> 
</template>

<style lang="scss" scoped>
  .wrapper{
    width: 25%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .project{
        position: relative;
        width: calc(25vw / 2 - 25px);
        height: 300px;
        margin-bottom: 50px;
    }
    .project:nth-child(even){
        transform: translateY(50%);
    }
    .project > div{
        position: absolute;
        right: 0;
        display: flex;
        justify-content: right;
        width: calc(25vw / 2 - 25px);
        height: 100%;
        // background: #fff;
        opacity: .5;
        transition: width .2s ease-out, opacity .1s;
        filter: grayscale(1);
        cursor: pointer;
        overflow: hidden;
    }
    .project > div > img{
        height: 100%;
    }
    .project:nth-child(even) > div{
        left: 0;
        justify-content: left;
    }
    .project:hover > div{
        width: calc((100vw - 130px) / 3);
        opacity: 1;
        filter: grayscale(0);
        transition: width .2s ease-out, opacity .1s, filter .1s;
    }

    &:hover{
      opacity: 1;
      filter: grayscale(0);
      transition: .2s;
    }

  }
</style>