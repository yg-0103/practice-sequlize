import Button from '@components/Button'
import Logo from '@components/Logo'
import * as S from './Header.style'
import Link from 'next/link'

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <Logo />
        <Link href="/write" passHref>
          <Button onClick={() => console.log('hi')}>글쓰기</Button>
        </Link>
      </S.Container>
    </S.Header>
  )
}
