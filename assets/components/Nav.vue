<script>
import { useRoute } from 'vue-router';

export default {
    mounted(){
        this.viewSwitch(),
        this.btnSwitch()
    },
    methods: {
        viewSwitch(){
            setTimeout(() => {
                if(this.$route.name == 'Blog' || window.location.href.indexOf('blog') != -1){
                    this.vHtml = 'portfolio'
                    this.vRoute = '/'
                    btnSwitch();
                }else{
                    this.vHtml = 'blog'
                    this.vRoute = '/blog'
                    btnSwitch();
                }
            }, 100);
        },
        btnSwitch(){
            setTimeout(() => {
                if(this.$route.name == 'Contact' || window.location.href.indexOf('contact') != -1){
                    if(window.history.state.back != null){
                        this.cRoute = window.history.state.back
                    }else{
                        this.cRoute = '/'
                    }
                    this.cHtml = 'back'
                }else{
                    this.cHtml = 'contact',
                    this.cRoute = '/contact'
                }
            }, 100);
        }
    },
    data() {
        return{
            vRoute: '/',
            vHtml: null,
            cRoute: '/',
            cHtml: null
        }
    }
}
</script>
<template>
    <RouterLink @click='viewSwitch()' :to="vRoute">{{ vHtml }}</RouterLink>
    <RouterLink @click='BtnSwitch()' :to="cRoute">{{ cHtml }}</RouterLink>
</template>