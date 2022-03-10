<template>
    <div class="links">
        <RouterLink to="/blog">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
            blog
        </RouterLink>
    </div>
</template>
<style lang="scss" scoped>
    .links{
        position: absolute;
        top: 0;
        right: 0;
        width: 130px;
        height: 50px;
        overflow: hidden;
        a{
            width: 100%;
            height: 100%;
            padding: 5px 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: inherit;
            font-size: 1.8rem;
            font-weight: 500;
            letter-spacing: .5rem;
            opacity: .5;
            transition: .2s;
            transform: translateY(150px);

            & > svg{
                margin-right: .2rem;
                transform: rotate(45deg) translateY(2px) scale(.7);
                fill: #fff;
            }
            &:hover{
                letter-spacing: .7rem;
                opacity: 1;
                transition: .2s;
            }
        }
    }
</style>