import Header from '@components/Header/Header'
import Input from '@components/Input'
import MarkdownEditor from './components/MarkdownEditor'
import * as CS from './common.style'
import Button from '@components/Button'
import { useForm, UseFormRegisterReturn } from 'react-hook-form'

export interface FormData {
  title: string
  content: React.ReactNode
}

export default function Write() {
  const { register, handleSubmit } = useForm<FormData>({ mode: 'onBlur' })

  const onSubmit = (form: FormData) => console.log(form)
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input id="title" placeholder="제목을 입력해주세요." register={register('title')} />
        <MarkdownEditor onChange={(v) => console.log(v)} />
        <CS.ButtonGroup>
          <Button type="submit" color="#000">
            저장
          </Button>
          <Button color="#000">취소</Button>
        </CS.ButtonGroup>
      </form>
    </>
  )
}
