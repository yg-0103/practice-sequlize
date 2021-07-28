import styled from 'styled-components'

export const Section = styled.section`
  padding: 3rem;
  background-color: #eee;
`

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 30rem);
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
  max-width: 100rem;
  margin: 2rem auto 0;
  align-items: center;
  justify-content: center;
`
