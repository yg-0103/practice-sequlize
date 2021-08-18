import styled from 'styled-components'

export const Container = styled.aside`
  flex: 0.2;
  background: #fff;
  flex-shrink: 0;
`

export const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const NavigationItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 900;
  background-color: #eee;
  border-radius: 2rem;
  color: #505050;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`
