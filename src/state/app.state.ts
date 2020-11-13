import { computed, ref } from 'vue'

export const useAppState = () => {
  const pageTitle = ref('')

  const setPageTitle = (title: string) => {
    pageTitle.value = title
  }

  return {
    pageTitle: computed(() => pageTitle.value),
    setPageTitle
  }
}
