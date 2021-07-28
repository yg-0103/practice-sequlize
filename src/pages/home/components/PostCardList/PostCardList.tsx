import PostCard from '../PostCard/PostCard'
import * as S from './PostCardList.style'

export default function PostCardList() {
  return (
    <S.Section>
      <S.Container>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </S.Container>
    </S.Section>
  )
}
