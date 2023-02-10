<template>
  <button @click="addCount">{{ count }}</button>
  <p>
    <router-link to="/">Go to Home</router-link> | <router-link to="/about">Go to About</router-link> |
    <router-link to="/main">Go to Main</router-link>
  </p>
  <router-view></router-view>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
const addCount = () => {
  count.value++;
};
</script>

<style scoped></style>
