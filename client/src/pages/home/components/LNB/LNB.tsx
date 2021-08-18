import * as S from './LNB.style'
import { FcNext } from 'react-icons/fc'
import { useRecoilValueLoadable } from 'recoil'
import { postDatas } from '@store/atoms'
import { Post } from '@store/models'

export default function LNB() {
  const post = useRecoilValueLoadable(postDatas)

  if (!post.contents.length) return null

  const hashTags = [
    ...new Set((post.contents as Post[]).map((content) => JSON.parse(content.hashTag)).flat()),
  ]

  return (
    <S.Container>
      <S.Navigation>
        {hashTags.map((hashTag, idx) => (
          <S.NavigationItem key={idx}>
            {hashTag} <FcNext />
          </S.NavigationItem>
        ))}
      </S.Navigation>
    </S.Container>
  )
}
