import React from 'react'
import { Formik, Form, Field, ErrorMessage, FormikProps, FormikHelpers } from 'formik'
import * as S from './TicketForm.styles'
import * as Yup from 'yup'
import axios from '../../../api/axios'
import Button from '../../atoms/Button/Button'

interface FormValues {
  name: string
  email: string
  description: string
}

const initialValues: FormValues = {
  name: '',
  email: '',
  description: '',
}

const TicketSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  description: Yup.string().required('Required'),
})

const TicketForm: React.FC = () => {

  const handleSubmit = async (payload: FormValues, actions: FormikHelpers<FormValues>) => {
    try {
      const res = await axios.post('/tickets/', payload)
      console.log('Ticket submitted successfully', res.data)
      actions.resetForm()
    } catch (error) {
      console.error('Error submitting ticket: ', error)
    } finally {
      actions.setSubmitting(false)
    }
  }

  return (
    <S.TicketFormContainer>
      <S.Heading>Support Ticket Request Form</S.Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={TicketSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions)
        }}
      >
        {({ isValid, isSubmitting, touched }: FormikProps<FormValues>) => {
          const allFieldsTouched = Object.keys(initialValues).every(
            (key) => touched[key as keyof FormValues]
          )
          return (
            <S.FormComponent as={Form}>
              <S.FormSectionContainer>
                <S.LabelContainer>
                  <S.Label htmlFor="name">Name:</S.Label>
                  <ErrorMessage name="name" component={S.ErrorMsg} />
                </S.LabelContainer>
                <Field name="name" placeholder="Name" as={S.InputField} />
              </S.FormSectionContainer>
              <S.FormSectionContainer>
                <S.LabelContainer>
                  <S.Label htmlFor="email">Email Address:</S.Label>
                  <ErrorMessage name="email" component={S.ErrorMsg} />
                </S.LabelContainer>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  as={S.InputField}
                />
              </S.FormSectionContainer>
              <S.FormSectionContainer>
                <S.LabelContainer>
                  <S.Label htmlFor="description">Description:</S.Label>
                  <ErrorMessage name="description" component={S.ErrorMsg} />
                </S.LabelContainer>
                <Field
                  name="description"
                  placeholder="Enter description here"
                  as={S.TextareaField}
                />
              </S.FormSectionContainer>
              <S.ButtonContainer>
                <Button
                  disabled={!isValid || isSubmitting || !allFieldsTouched}
                  fontSize='18px'
                  padding='5px 20px'
                >
                  Submit
                </Button>
              </S.ButtonContainer>
            </S.FormComponent>
          )
        }}
      </Formik>
    </S.TicketFormContainer>
  )
}

export default TicketForm
