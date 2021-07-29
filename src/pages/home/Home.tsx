import Header from '@components/Header'
import LNB from './components/LNB'
import PostCardList from './components/PostCardList'
import * as CS from './common.style'

export default function Home() {
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
