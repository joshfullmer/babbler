<template>
  <teleport to="head">
    <title>{{ title }}</title>
  </teleport>
  {{ title }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

export const title = ref('Babbler: A twitter clone')
</script>
