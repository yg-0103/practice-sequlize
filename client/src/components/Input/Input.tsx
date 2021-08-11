import * as S from './Input.style'

interface Props {
  label?: string
  type?: string
  placeholder?: string
}

export default function Input({ label, type = 'text', placeholder }: Props) {
  return (
    <S.Container>
      <S.Label>
        {label}
        <S.Input type={type} placeholder={placeholder} />
      </S.Label>
    </S.Container>
  )
}
