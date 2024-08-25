<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import defaultLayout from './layouts/defaultLayout.vue'
</script>

<template>
  <default-layout>
    <template #main>
      <RouterView />
    </template>
  </default-layout>
</template>

<style scoped></style>
