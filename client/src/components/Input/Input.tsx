import * as S from './Input.style'
import { UseFormRegisterReturn } from 'react-hook-form'
import { FormData } from '@pages/write/Write'
interface Props {
  label?: string
  type?: string
  placeholder?: string
  register: UseFormRegisterReturn
  id?: keyof FormData
}

export default function Input({ id, label, type = 'text', placeholder, register }: Props) {
  return (
    <S.Container>
      <S.Label>
        {label}
        <S.Input id={id} type={type} placeholder={placeholder} {...register} />
      </S.Label>
    </S.Container>
  )
}
