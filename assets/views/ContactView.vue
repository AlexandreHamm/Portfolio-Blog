<script setup>
import Form from '../components/Form.vue'
</script>

<template>
    <Transition appear name="form">
        <Form />
    </Transition>
</template>
<style>
    .form-enter-active,
    .form-leave-active {
        transition: transform 1s ease-out;
    }

    .form-enter-from,
    .form-leave-to {
        transform: translateX(100%);
    }
</style>

