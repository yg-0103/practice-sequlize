import PostCard from '../PostCard/PostCard'
import * as S from './PostCardList.style'
import React from 'react'
import { useRecoilValueLoadable } from 'recoil'
import { postDatas } from '@store/atoms'
import { Post } from '@store/models'

export default function PostCardList() {
  const posts = useRecoilValueLoadable(postDatas)

  if (posts.state === 'loading') return null

  return (
    <S.Section>
      <S.Container>
        {posts.contents.map((content: Post) => (
          <PostCard key={content.id} post={content} />
        ))}
      </S.Container>
    </S.Section>
  )
}
