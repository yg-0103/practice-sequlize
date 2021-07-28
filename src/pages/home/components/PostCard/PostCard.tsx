import * as S from './PostCard.style'
import { BsHeartFill } from 'react-icons/bs'
export default function PostCard() {
  return (
    <S.Container>
      <S.ImageWrapper>
        <img
          src="http://tlog.tammolo.com/static/typescript-f5e33258b60ea94e5aa81b55a05a22dd.jpeg"
          alt="ts"
        />
      </S.ImageWrapper>
      <S.ContentWrapper>
        <S.Title>타입스크립트를 배워보자 타입스크립트를 배워보자 타입스크립트를 배워보자</S.Title>
        <S.Paragraph>
          타입스크립트를 배워보자 타입스크립트를 배워보자 타입스크립트를 배워보자타입스크립트를
          배워보자 타입스크립트를 배워보자 타입스크립트를 배워보자타입스크립트를 배워보자
          타입스크립트를 배워보자 타입스크립트를 배워보자타입스크립트를 배워보자 타입스크립트를
          배워보자 타입스크립트를 배워보자타입스크립트를 배워보자 타입스크립트를 배워보자
          타입스크립트를 배워보자타입스크립트를 배워보자 타입스크립트를 배워보자 타입스크립트를
          배워보자
        </S.Paragraph>
        <S.TimeStemp>2021년 7월 28일</S.TimeStemp>
      </S.ContentWrapper>
      <S.LikeBox>
        <BsHeartFill />
      </S.LikeBox>
    </S.Container>
  )
}
