<template>
    <div class="logo">
        <img src="https://thumbs.gfycat.com/ClumsyDownrightHoneyeater-size_restricted.gif" alt="">
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";
.logo{
    position: relative;
    width: 150px;
    height: 150px;
    clip-path: polygon(30% 28%, 0 28%, 39% 100%, 65% 100%, 100% 24%, 87% 0, 16% 0, 30% 27%, 73% 27%, 52% 71%);
    margin: 0 auto 3rem;

    & > img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
    }
}
</style>