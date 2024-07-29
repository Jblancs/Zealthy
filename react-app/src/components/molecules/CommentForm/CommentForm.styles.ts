import styled from "styled-components";
import { Field } from 'formik';

export const FormContainer = styled.div`
display: flex;
min-width 1000px;
padding: 10px 0;
`

export const FormComponent = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
width: 80%;
`

export const FieldElement = styled(Field)`
border: none;
border-bottom: 1px solid #bfbfbf;
width: 98%;
font-size: 20px;
padding: 20px;
margin-left: 20px;
`

export const ButtonContainer = styled.div`
display: flex;
margin-left: 20px;

justify-content: flex-end;
`
