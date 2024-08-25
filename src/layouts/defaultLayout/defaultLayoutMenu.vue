<script lang="ts" setup>
import { ref } from 'vue'
import defaultLayoutMenuBtn from './defaultLayoutMenu/defaultLayoutMenuBtn.vue'

const rail = ref<boolean>(true)
</script>

<template>
  <v-navigation-drawer
    color="primary"
    :rail="rail"
    :rail-width="$STYLE_VARIBLES.NAVIGATION.DEFAULT_RAIL_WIDTH"
  >
    <v-list>
      <v-list-item><defaultLayoutMenuBtn></defaultLayoutMenuBtn></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
