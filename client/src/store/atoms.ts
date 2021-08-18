import { selector } from 'recoil'
import * as API from './apis'

export const postDatas = selector({
  key: 'postDatas',
  get: async () => {
    try {
      const postDatas = await API.getPosts()
      return postDatas
    } catch (e) {
      console.error(e)
    }
  },
})
