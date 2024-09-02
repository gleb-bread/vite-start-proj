<script lang="ts" setup>
import { type Model } from './model'

const model = defineModel<Model>({ required: true })
</script>

<template>
  <v-icon @click.stop="model = !model">mdi-menu</v-icon>
</template>
