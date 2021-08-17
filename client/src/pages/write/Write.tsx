import Header from '@components/Header/Header'
import Input from '@components/Input'
import MarkdownEditor from './components/MarkdownEditor'
import * as CS from './common.style'
import Button from '@components/Button'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'

export interface PostData {
  title: string
  value: string
  content: React.ReactNode
  hashTags: string[]
}

export default function Write() {
  const [postData, setPostData] = useState<PostData>({
    value: '',
    hashTags: [],
    title: '',
    content: null,
  })
  const router = useRouter()
  const { value, hashTags, title, content } = postData

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (['Enter', ' '].includes(e.key)) {
      setPostData({
        ...postData,
        hashTags: [...hashTags, value.replaceAll('#', '')],
        value: '',
      })
    }
  }

  const handleChangeContent = (content: React.ReactNode) => {
    setPostData({
      ...postData,
      content,
    })
  }

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPostData({
      ...postData,
      value: e.target.value,
    })
  }

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setPostData({
      ...postData,
      title: e.target.value,
    })
  }

  const handleSubmit = async () => {
    try {
      const post = await axios.post('http://localhost:3065/post', {
        ...postData,
        hashTags: JSON.stringify(hashTags),
      })
      router.push('/')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <Header />
      <Input placeholder="제목을 입력해주세요." value={title} onChange={handleChangeTitle} />
      <CS.HashTagWrapper>
        {hashTags.map((hashTag, idx) => (
          <CS.HashTag key={idx}>{hashTag}</CS.HashTag>
        ))}
        <Input
          style={{ fontSize: '2rem' }}
          placeholder="태그를 입력해주세요."
          onKeyDown={handleKeyDown}
          value={value}
          onChange={handleChangeValue}
        />
      </CS.HashTagWrapper>

      <MarkdownEditor onChange={handleChangeContent} />
      <CS.ButtonGroup>
        <Button type="button" color="#000" onClick={handleSubmit}>
          저장
        </Button>
        <Button color="#000" onClick={() => router.back()}>
          취소
        </Button>
      </CS.ButtonGroup>
    </>
  )
}
