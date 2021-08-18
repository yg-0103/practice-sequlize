import styled from 'styled-components'

export const Button = styled.button<{ color: string }>`
  padding: 1rem 3rem;
  border: 2px solid ${({ color }) => color};
  border-radius: 2rem;
  background-color: transparent;
  color: ${({ color }) => color};
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.2rem;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`
