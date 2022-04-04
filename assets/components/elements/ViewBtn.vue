<script>
import { useRoute } from 'vue-router';

export default {
    mounted(){
        this.viewSwitch()
    },
    methods: {
        viewSwitch(){
            setTimeout(() => {
                if(this.$route.name == 'Blog' || window.location.href.indexOf('blog') != -1){
                    this.html = 'portfolio'
                    this.route = '/'
                }else{
                    this.html = 'blog',
                    this.route = '/blog'
                }
            }, 100);
        }
    },
    data() {
        return{
            route: '/',
            html: null
        }
    }
}
</script>
<template>
    <RouterLink @click='viewSwitch()' :to="route">{{ html }}</RouterLink>
</template>