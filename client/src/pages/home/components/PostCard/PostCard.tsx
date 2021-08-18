import * as S from './PostCard.style'
import { BsHeartFill } from 'react-icons/bs'
import { Post } from '@store/models'

interface Props {
  post: Post
}

export default function PostCard({ post }: Props) {
  return (
    <S.Container>
      <S.ImageWrapper>
        <img
          src="https://media.vlpt.us/images/jini_eun/post/107f5cfb-e97c-4c4c-b997-06098062e5b3/image.png"
          alt="react"
        />
      </S.ImageWrapper>
      <S.ContentWrapper>
        <S.Title>{post.title}</S.Title>
        <S.Paragraph>{post.content.replace(/<[^>]*>/g, '')}</S.Paragraph>
        <S.TimeStemp>
          {post.createdAt.slice(0, 10)}
          <BsHeartFill />
        </S.TimeStemp>
      </S.ContentWrapper>
      <S.LikeBox></S.LikeBox>
    </S.Container>
  )
}
