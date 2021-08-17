import * as S from './PostCard.style'
import { BsHeartFill } from 'react-icons/bs'

interface Props {
  data: {
    UserId: number | null
    content: React.ReactNode
    createdAt: string
    hashTag: string
    id: number
    image: string | null
    title: string
    updateAt: string
  }
}

export default function PostCard({ data }: Props) {
  return (
    <S.Container>
      <S.ImageWrapper>
        <img
          src="http://tlog.tammolo.com/static/typescript-f5e33258b60ea94e5aa81b55a05a22dd.jpeg"
          alt="ts"
        />
      </S.ImageWrapper>
      <S.ContentWrapper>
        <S.Title>{data.title}</S.Title>
        <S.Paragraph>{data.content}</S.Paragraph>
        <S.TimeStemp>
          {data.createdAt}
          <BsHeartFill />
        </S.TimeStemp>
      </S.ContentWrapper>
      <S.LikeBox></S.LikeBox>
    </S.Container>
  )
}
