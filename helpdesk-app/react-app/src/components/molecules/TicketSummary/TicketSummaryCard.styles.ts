import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  min-width: 1000px;
  border-bottom: 1px solid #bfbfbf;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f2f2f2;
  }
`

export const CardSection = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid #bfbfbf;
  width: 20%;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const IdSection = styled(CardSection)`
  border-left: 1px solid #bfbfbf;
  justify-content: center;
`

export const DescriptionSection = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid #bfbfbf;
  padding: 10px;
  width: 30%;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #bfbfbf;
  width: 10%;
`

export const Button = styled.button`
  border: 2px solid black;
  border-radius: 20px;
  background-color: #99ccff;
  padding: 2px 10px;
  cursor: pointer;
  transition: box-shadow 0.1s;
  &:hover {
    box-shadow: 1px 2px 5px black;
    transform: scale(1.02);
  }
`
