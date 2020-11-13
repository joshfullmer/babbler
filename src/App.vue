<template>
  <teleport to="head">
    <title>{{ pageTitle }}</title>
  </teleport>

  <div class="h-full flex justify-center items-center">
    {{ pageTitle }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import { useAppState } from './state'

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
