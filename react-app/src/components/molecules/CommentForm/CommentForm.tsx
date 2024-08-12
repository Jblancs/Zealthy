import React from 'react'
import { Formik, Form, FormikHelpers, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from '@api/axios'
import Button from '@components/atoms/Button/Button'
import './CommentForm.css'

interface CommentProps {
  ticketId: string
  fetchTicket: () => Promise<void>
}

interface CommentFormValues {
  content: string
}

const CommentForm: React.FC<CommentProps> = ({ ticketId, fetchTicket }) => {
  const initialValues: CommentFormValues = {
    content: '',
  }

  const CommentSchema = Yup.object().shape({
    content: Yup.string()
      .required('Required')
      .max(100, 'Comment must be 100 characters or less'),
  })

  const handleSubmit = async (
    payload: CommentFormValues,
    actions: FormikHelpers<CommentFormValues>
  ) => {
    try {
      await axios.post(`/comments/tickets/${ticketId}`, payload)
      actions.resetForm()
      alert('Comment submission successful!')
      await fetchTicket()
    } catch (error) {
      console.error('Error posting comment: ', error)
    } finally {
      actions.setSubmitting(false)
    }
  }

  return (
    <div className="comment-form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={CommentSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions)
        }}
      >
        {() => {
          return (
            <Form className="comment-form-element">
              <Field
                name="content"
                placeholder="Add a comment..."
                className="comment-form-field"
              />
              <div className="comment-form-btn-container">
                <ErrorMessage
                  name="content"
                  className="comment-form-error-msg"
                  component="div"
                />
                <Button padding="10px 20px">Comment</Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default CommentForm
