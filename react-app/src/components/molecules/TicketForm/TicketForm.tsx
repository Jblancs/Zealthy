import React from 'react'
import { Formik, Form, Field, ErrorMessage, FormikProps, FormikHelpers, } from 'formik'
import * as S from './TicketForm.styles'
import * as Yup from 'yup'
import axios from '@api/axios'
import Button from '@components/atoms/Button/Button'
import './TicketForm.css'

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
  name: Yup.string().required('Required').max(30, 'Name must be 30 characters or less'),
  email: Yup.string().email('Invalid email address').required('Required').max(30, 'Email must be 30 characters or less'),
  description: Yup.string().required('Required').max(1000, 'Description must be 1000 characters or less'),
})

const TicketForm: React.FC = () => {

  const handleSubmit = async (payload: FormValues, actions: FormikHelpers<FormValues>) => {
    try {
      const res = await axios.post('/tickets/', payload)
      actions.resetForm()
      alert('Ticket submission successful!')
    } catch (error) {
      console.error('Error submitting ticket: ', error)
    } finally {
      actions.setSubmitting(false)
    }
  }

  return (
    <div className='ticket-form-container'>
      <div className='ticket-form-heading'>Ticket Request Form</div>
      <Formik
        initialValues={initialValues}
        validationSchema={TicketSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions)
        }}
      >
        {({ isSubmitting }: FormikProps<FormValues>) => {
          return (
            <Form className='ticket-form-element'>
              <div className='ticket-form-section-container'>
                <div className='ticket-form-label-container'>
                  <label className='ticket-form-label' htmlFor="name">Name:</label>
                  <ErrorMessage className='ticket-form-error-msg' name="name" component='div' />
                </div>
                <Field name="name" placeholder="Name" className='ticket-form-input-field'/>
              </div>
              <div className='ticket-form-section-container'>
                <div className='ticket-form-label-container'>
                  <label className='ticket-form-label' htmlFor="email">Email Address:</label>
                  <ErrorMessage className='ticket-form-error-msg' name="email" component='div' />
                </div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className='ticket-form-input-field'
                />
              </div>
              <div className='ticket-form-section-container'>
                <div className='ticket-form-label-container'>
                  <label className='ticket-form-label' htmlFor="description">Description:</label>
                  <ErrorMessage className='ticket-form-error-msg' name="description" component='div' />
                </div>
                <Field
                  name="description"
                  placeholder="Enter description here"
                  as={S.TextareaField}
                  className='ticket-form-textarea-field'
                />
              </div>
              <div className='ticket-form-btn-container'>
                <Button
                  fontSize='18px'
                  padding='5px 20px'
                >
                  Submit
                </Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default TicketForm
