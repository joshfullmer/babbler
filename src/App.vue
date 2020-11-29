<template>
  <PageTitle />

  <div class="h-full flex flex-col justify-center items-center">
    {{ pageTitle }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageTitle from './components/PageTitle.vue'

import { useAppState } from './state/app.state'

export default defineComponent({
  components: { PageTitle },

  setup () {
    const { pageTitle } = useAppState()

    return { pageTitle }
  }
})

</script>
