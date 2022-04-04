<script setup>
import Form from '../components/Form.vue'
</script>

<template>
    <Transition appear name="form" mode="out-in">
        <Form />
    </Transition>
</template>
<style>
    .form-enter-active {
        animation: clip-in 1s ease-out;
    }
    .form-leave-active { 
        animation: clip-in 1s ease-out reverse;
    }

    @keyframes clip-in {
      from{
        clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
      }
      to{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }
</style>

