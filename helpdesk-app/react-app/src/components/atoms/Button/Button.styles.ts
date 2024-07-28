import styled from 'styled-components'

export const Button = styled.button<{
    color?: string,
    padding?: string,
    bgColor?: string,
    fontSize?: string
}>`
  border: 2px solid black;
  border-radius: 20px;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  padding: ${props => props.padding};
  font-size: ${props => props.fontSize};
  cursor: pointer;
  transition: box-shadow 0.1s;
  &:hover {
    box-shadow: 1px 2px 5px black;
    transform: scale(1.02);
  }
`
