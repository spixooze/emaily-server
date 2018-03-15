import styled from 'styled-components'

export const Container = styled.div`
  padding: ${({ padding }) => (padding ? padding : '20px')};
`

export const FlexGroup = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'space-between'};
  width: 100%;
`
