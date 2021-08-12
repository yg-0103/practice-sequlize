import Header from '@components/Header/Header'
import Input from '@components/Input'
import MarkdownEditor from './components/MarkdownEditor'
import * as CS from './common.style'
import Button from '@components/Button'

export default function Write() {
  return (
    <>
      <Header />
      <Input placeholder="제목을 입력해주세요." />
      <MarkdownEditor onChange={(v) => console.log(v)} />
      <CS.ButtonGroup>
        <Button color="#000">저장</Button>
        <Button color="#000">취소</Button>
      </CS.ButtonGroup>
    </>
  )
}
