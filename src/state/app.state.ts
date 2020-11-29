import { readonly, ref } from 'vue'

const pageTitle = ref('')

const setPageTitle = (title: string) => {
  pageTitle.value = title
}

export const useAppState = () => {
  return {
    pageTitle: readonly(pageTitle),
    setPageTitle
  }
}
