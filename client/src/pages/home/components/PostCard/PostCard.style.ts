import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  padding-right: 3rem;
  height: 20rem;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  transition: 0.1s;
  cursor: pointer;
  background-color: #fff;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
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
