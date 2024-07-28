import styled from 'styled-components'

export const TicketFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 3px solid black;
  border-radius: 5px;
  box-shadow: 2px 2px 5px black;
  padding: 40px 20px;
  width: 70%;
  min-width: 500px;
`
export const Heading = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`

export const FormComponent = styled.form`
display: flex:
flex-direction: column;
min-width: 400px;
`

export const FormSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between
`

export const Label = styled.label`
  font-weight: bold;
  font-size: 25px;
`

export const InputField = styled.input`
    height: 30px;
    font-size: 18px;
`

export const TextareaField = styled.textarea`
  height: 60px;
  font-size: 18px;
  max-width: 100%;
`

export const ErrorMsg = styled.div`
  color: red;
  padding: 0 5px;
  display: flex;
  align-self: center;
`

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 10px;
`

