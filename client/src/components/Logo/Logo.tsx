import * as S from './Logo.style'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" passHref>
      <S.Logo>YLOG</S.Logo>
    </Link>
  )
}
