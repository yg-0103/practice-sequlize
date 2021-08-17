import * as S from './Input.style'
import { CSSProperties } from 'react'
import { KeyboardEvent, ChangeEvent } from 'react'
import React from 'react'
interface Props {
  value: string
  label?: string
  type?: string
  placeholder?: string
  style?: CSSProperties
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function Input({ label, type = 'text', placeholder, style, onKeyDown, onChange, value }: Props) {
  return (
    <S.Container>
      <S.Label>
        {label}
        <S.Input
          type={type}
          placeholder={placeholder}
          style={style}
          value={value}
          onKeyPress={onKeyDown}
          onChange={onChange}
        />
      </S.Label>
    </S.Container>
  )
}

export default React.memo(Input)
