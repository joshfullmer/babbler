<template>
  <teleport to="head">
    <title>{{ pageTitle }}</title>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import { useAppState } from '../state/app.state'

export default defineComponent({
  setup () {
    const { pageTitle, setPageTitle } = useAppState()

    onMounted(() => {
      setPageTitle('Babbler: A twitter clone')
    })

    return { pageTitle }
  }
})
</script>
