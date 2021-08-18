import axios from 'axios'
import { Post } from './models'
import { PostData } from '../pages/write/Write'

const API = axios.create({
  baseURL: 'http://localhost:3065',
})

export const getPosts = async () => {
  try {
    const { data } = await API.get<Post[]>('/post')
    return data
  } catch (e) {
    console.error(e)
  }
}

export const postData = async (post: PostData) => {
  try {
    await API.post('/post', {
      ...post,
      hashTags: JSON.stringify(post.hashTags),
    })
  } catch (e) {
    console.error(e)
  }
}
