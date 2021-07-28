import Button from '@components/Button'
import Logo from '@components/Logo'
import * as S from './Header.style'

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <Logo />
        <Button onClick={() => console.log('hi')}>글쓰기</Button>
      </S.Container>
    </S.Header>
  )
}
