import { MouseEvent } from 'react'
import * as S from './Button.style'

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit'
  color?: string
  onClick?: (e: MouseEvent) => void
}

export default function Button({ children, type, onClick, color = '#aaa' }: Props) {
  return (
    <S.Button type={type} onClick={onClick} color={color}>
      {children}
    </S.Button>
  )
}
