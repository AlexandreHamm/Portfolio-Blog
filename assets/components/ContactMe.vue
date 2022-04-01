<script>
import { useRoute } from 'vue-router';

export default {
    mounted(){
        this.btnSwitch()
    },
    methods: {
        btnSwitch(){
            setTimeout(() => {
                if(this.$route.name == 'Contact' || window.location.href.indexOf('contact') != -1){
                    if(window.history.state.back != null){
                        this.route = window.history.state.back
                    }else{
                        this.route = '/'
                    }
                    this.html = 'back'
                }else{
                    this.html = 'contact me',
                    this.route = '/contact'
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
    <RouterLink @click='btnSwitch()' :to="route">{{ html }}</RouterLink>
</template>