import styled from 'styled-components'

export const Button = styled.button<{ color: string }>`
  padding: 1rem 3rem;
  border: 4px solid ${({ color }) => color};
  border-radius: 2rem;
  background-color: transparent;
  color: ${({ color }) => color};
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
`
