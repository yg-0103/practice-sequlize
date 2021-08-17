import styled from 'styled-components'

export const Section = styled.section`
  padding: 2rem;
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;

  button {
    margin-right: 2rem;
  }
`

export const HashTagWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const HashTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 1rem;
  background: #eee;
  border-radius: 1rem;
  font-size: 1.6rem;
  animation: Show 0.3s 1 alternate forwards;

  margin-left: 1rem;

  @keyframes Show {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: 3rem;
      opacity: 1;
    }
  }
`
