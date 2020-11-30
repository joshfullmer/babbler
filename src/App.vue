<template>
  <PageTitle />

  <main class="h-full flex flex-col">
    <div class="flex h-full">
      <section class="bg-green-500 flex-1">
        <h1>Hi</h1>
      </section>

      <section class="bg-red-500 flex-1 flex flex-col items-center">
        <form class="flex">
          <fieldset class="flex flex-col">
            <label for="user">Phone, Email, or Username</label>
            <input
              name="user"
              type="text"
            >
          </fieldset>

          <fieldset class="flex flex-col">
            <label for="password">Password</label>
            <input
              name="password"
              type="password"
            >
            <a href="#">Forgot password?</a>
          </fieldset>

          <button type="submit">
            Log in
          </button>
        </form>

        <div class="flex flex-col">
          <img
            src=""
            alt=""
          >

          <h3><strong>See what’s happening in the world right now</strong></h3>

          <span>Join Twitter today.</span>

          <button>Sign up</button>

          <button>Log in</button>
        </div>
      </section>
    </div>

    <footer class="bg-pink-900 h-12">
      <h1>Text</h1>
    </footer>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageTitle from './components/PageTitle.vue'

export default defineComponent({
  components: { PageTitle }
})
</script>
