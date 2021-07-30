import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  margin: 1rem 0;
  padding-right: 3rem;
  border: 1px solid #aaa;
  border-radius: 1rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  transition: 0.4s;
  cursor: pointer;
  background-color: #fff;
  overflow: hidden;

  &:hover {
    transform: translateY(-1rem);
  }
`

export const ImageWrapper = styled.div`
  max-width: 20rem;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
  }
`

export const ContentWrapper = styled.div`
  padding: 2.5rem 0 2.5rem 2.5rem;
`

export const Title = styled.h2`
  display: -webkit-box;
  color: #434949;
  font-size: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Paragraph = styled.p`
  display: -webkit-box;
  margin: 1.5rem 0 2rem;
  font-size: 1.6rem;
  color: #434949;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const TimeStemp = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-top: 1rem;
  font-size: 1.4rem;
  color: rgb(125, 130, 135);

  svg {
    color: red;
    width: 2rem;
    height: 2rem;
  }
`

export const LikeBox = styled.div``
