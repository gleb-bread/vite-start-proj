<script lang="ts" setup>
import { ref } from 'vue'
import defaultLayoutMenuBtn from './defaultLayoutMenu/defaultLayoutMenuBtn.vue'

const rail = ref<boolean>(true)
const openMobileMenu = ref<boolean>(false)
</script>

<template>
  <v-navigation-drawer
    color="primary"
    :rail="rail"
    :rail-width="$STYLE_VARIBLES.NAVIGATION.DEFAULT_RAIL_WIDTH"
  >
    <desktop-menu-list :bg-color="$STYLE_VARIBLES.COLOR.PRIMARY">
      <desktop-menu-list-item>
        <default-layout-menu-btn v-model:model-value="openMobileMenu"></default-layout-menu-btn>
      </desktop-menu-list-item>
    </desktop-menu-list>
  </v-navigation-drawer>
</template>
