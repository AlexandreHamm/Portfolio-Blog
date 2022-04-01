<script setup>
import ContactMe from './ContactMe.vue';
</script>

<template>
    <footer class="socials">
        <ContactMe />
        <div class="socials__links">
            <a href="https://www.linkedin.com/in/alexandre-hamm-a30545209/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </a>
            <a href="https://twitter.com/AlxHAMM_" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="https://www.instagram.com/overthingz/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://github.com/AlexandreHamm/" target="_blank">
                <svg viewBox="0 0 152 152"><path d="m53.1 141c4.6 0 5.9-1.8 5.9-4.1s0-7.3-.1-14.4c-23.9 5.1-29-11.4-29-11.4-3.9-9.7-9.6-12.4-9.6-12.4-7.8-5.2.6-5.1.6-5.1 8.6.6 13.2 8.7 13.2 8.7 7.7 13 20.1 9.2 25 7 .4-4.3 2.3-8.4 5.5-11.4-19.1-2.1-39.2-9.4-39.2-41.8-.1-8.4 3.1-16.6 8.9-22.7-1-2.1-3.9-10.7.7-22.4 0 0 7.2-2.3 23.7 8.7 14.1-3.8 28.9-3.8 43 0 16.3-10.9 23.6-8.7 23.6-8.7 4.6 11.6 1.7 20.2.9 22.4 5.8 6.1 8.9 14.3 8.8 22.7 0 32.5-20.1 39.6-39.3 41.7 3 2.5 5.8 7.7 5.8 15.6 0 11.4-.1 20.4-.1 23.1 0 2.2 1 4 5.9 4z"></path></svg>
            </a>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .socials{
        position: absolute;
        bottom: 2%;
        width: 100%;
        height: calc(50px + 2%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;

        & > a{
            font-family: inherit;
            font-size: 1.8rem;
            font-weight: 500;
            letter-spacing: .5rem;
            opacity: .5;
            transform: translateY(150px);
            transition: opacity .2s, letter-spacing .2s, transform 1s ease-out;

            &:hover{
                letter-spacing: .7rem;
                opacity: 1;
                transition: .2s;
            }
        }

        &__links{
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            & > a{
                width: 50px;
                height: 40px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                transform: translateY(150px);
                opacity: .5;
                transition: opacity .2s, transform 1.2s ease-out;

                & > svg{
                    width: 15px;
                    height: 15px;

                    & > path{
                        fill: #fff;
                    }
                }
                &:hover{
                    opacity: 1;
                    transition: .2s;
                }
            }
        }
    }
</style>