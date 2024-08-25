<script lang="ts" setup>
import defaultLayoutMenu from './defaultLayout/defaultLayoutMenu.vue'
</script>

<template>
  <v-responsive>
    <v-app>
      <template v-if="$slots.header">
        <v-app-bar>
          <slot name="header"></slot>
        </v-app-bar>
      </template>

      <defaultLayoutMenu />

      <v-main>
        <slot name="main"></slot>
      </v-main>
    </v-app>
  </v-responsive>
</template>
