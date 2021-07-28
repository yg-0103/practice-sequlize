import { MouseEvent } from 'react'
import * as S from './Button.style'

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit'
  onClick?: (e: MouseEvent) => void
}

export default function Button({ children, type, onClick }: Props) {
  return (
    <S.Button type={type} onClick={onClick}>
      {children}
    </S.Button>
  )
}
