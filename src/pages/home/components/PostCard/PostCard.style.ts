import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  min-height: 36rem;
  border: 2px solid #aaa;
  border-radius: 2rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  transition: 0.4s;
  background-color: #fff;
  overflow: hidden;

  &:hover {
    transform: translateY(-1rem);
  }
`

export const ImageWrapper = styled.div`
  transform: translateY(-1rem);

  img {
    width: 100%;
  }
`

export const ContentWrapper = styled.div`
  padding: 0.5rem 2rem;
`

export const Title = styled.h2`
  color: #434949;
  font-size: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  display: block;
  font-size: 1.2rem;
  color: rgb(125, 130, 135);
`

export const LikeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: red;
  padding: 1rem;
  margin-top: 1rem;
  border-top: 1px solid #aaa;

  svg {
    width: 2rem;
    height: 2rem;
  }
`
