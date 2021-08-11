import Header from '@components/Header/Header'
import Input from '@components/Input'
import MarkdownEditor from './components/MarkdownEditor'
import * as CS from './common.style'

export default function Write() {
  return (
    <>
      <Header />
      <Input placeholder="제목을 입력해주세요." />
      <MarkdownEditor onChange={(v) => console.log(v)} />
    </>
  )
}
