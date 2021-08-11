import Header from '@components/Header/Header'
import MarkdownEditor from './components/MarkdownEditor/MarkdownEditor'

export default function Write() {
  return (
    <>
      <Header />
      <MarkdownEditor onChange={(v) => console.log(v)} />
    </>
  )
}
