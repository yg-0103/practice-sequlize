import Header from '@components/Header'
import LNB from './components/LNB'
import PostCardList from './components/PostCardList'
import * as CS from './common.style'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [post, setPost] = useState<React.ReactNode>(null)

  useEffect(() => {
    ;(async () => {
      const post = await axios.get('http://localhost:3065/post')

      console.log(post)
    })()
  }, [])
  return (
    <>
      <Header />
      <CS.Container>
        <LNB />
        <PostCardList />
      </CS.Container>
    </>
  )
}
