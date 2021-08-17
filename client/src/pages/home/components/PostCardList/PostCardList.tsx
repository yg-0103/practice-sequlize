import PostCard from '../PostCard/PostCard'
import * as S from './PostCardList.style'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'

export default function PostCardList() {
  const [post, setPost] = useState<
    AxiosResponse<
      {
        UserId: number | null
        content: React.ReactNode
        createdAt: string
        hashTag: string
        id: number
        image: string | null
        title: string
        updateAt: string
      }[]
    >
  >()

  useEffect(() => {
    ;(async () => {
      const post = await axios.get('http://localhost:3065/post')

      setPost(post)
    })()
  }, [])
  return (
    <S.Section>
      <S.Container>
        {post?.data.map((data) => (
          <PostCard key={data.id} data={data} />
        ))}
      </S.Container>
    </S.Section>
  )
}
