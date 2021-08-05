import * as S from './LNB.style'
import { AiOutlineRightCircle } from 'react-icons/ai'

export default function LNB() {
  return (
    <S.Container>
      <S.Navigation>
        <S.NavigationItem>
          리액트 <AiOutlineRightCircle />
        </S.NavigationItem>
        <S.NavigationItem>
          타입스크립트 <AiOutlineRightCircle />
        </S.NavigationItem>
        <S.NavigationItem>
          자바스크립트 <AiOutlineRightCircle />
        </S.NavigationItem>
        <S.NavigationItem>
          넥스트 <AiOutlineRightCircle />
        </S.NavigationItem>
        <S.NavigationItem>
          HTML <AiOutlineRightCircle />
        </S.NavigationItem>
        <S.NavigationItem>
          CSS <AiOutlineRightCircle />
        </S.NavigationItem>
        <S.NavigationItem>
          알고리즘 <AiOutlineRightCircle />
        </S.NavigationItem>
      </S.Navigation>
    </S.Container>
  )
}
