<script>
export default {
    methods: {
        sendMessage() {
            if(document.cookie.indexOf('mailSent=') == -1){
                const request = new XMLHttpRequest();
                request.open("POST", "https://discord.com/api/webhooks/947848011013320744/df8qgVs24_XNn7QczySkjd_gZxiM0QwEEXQDULphvGB9FHR1xdgLy1xXdxK9BNPNuY95");

                request.setRequestHeader('Content-type', 'application/json');

                const params = {
                    username: "᲼",
                    avatar_url: "https://i.imgur.com/9KaAQ2o.png",
                    // content: document.querySelector('input[type="email"]').value + document.querySelector('textarea').value
                        embeds: [
                            {
                                color: 0xFFFFFF,
                                title: document.querySelector('input').value,
                                description: document.querySelector('textarea').value,
                                // image: {
                                //     url:
                                //     'https://i.imgur.com/6J5PRTX.png',
                                // },
                                footer: {
                                    text: document.querySelector('input[type="email"]').value,
                                    icon_url:
                                    'https://i.imgur.com/HeYrTpG.png',
                                },
                            },
                            ],
                }
                if(document.querySelector('input').value != "" || document.querySelector('textarea').value != ""){
                    request.send(JSON.stringify(params));
                }

                setCookie('mailSent');
            }
        }
    },
}
function setCookie(name) {
    let expireDate = new Date;
    expireDate.setTime(expireDate.getTime() + (60 * 1000));
    let expires = "; expires="+expireDate.toGMTString();
    document.cookie = name+"="+expires+"; path=/";
}
</script>
<template>
    <div ref="contact">
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <textarea placeholder="Message"></textarea>
        <button @click="sendMessage()">Send</button>
    </div>
</template>
<style scoped>
    div{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    input, input::placeholder, textarea, textarea::placeholder{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-family: Arial, Helvetica, sans-serif;
        color: #000;
    }
    input, textarea{
        padding: .5rem;
        width: 60%;
    }
    input, textarea, button{
        margin: .2rem;
        border: none;
        outline: none;
        opacity: .5;
        transition: .2s;
    }
    button{
        color: #000;
        padding: .5rem 1rem;
    }
    :is(input, textarea, button):hover, :focus{
        opacity: 1;
        transition: .2s;
    }
    textarea{
        height: 50vh;
        resize: none;
    }
</style>