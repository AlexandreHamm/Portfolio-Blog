<script>
export default {
    mounted(){
        this.test()
    },
    methods: {
        test(){
            setTimeout(() => {
                if(window.location.href.indexOf('contact') != -1){
                    this.route = '/',
                    this.html = 'back'
                }else{
                    this.route = '/contact',
                    this.html = 'contact me'
                }
            }, 10);
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
    <RouterLink @click='test()' :to="route"> {{ html }} </RouterLink>
</template>