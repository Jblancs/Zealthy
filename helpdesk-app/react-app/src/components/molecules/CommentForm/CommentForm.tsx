import React from 'react'
import * as S from './CommentForm.styles'
import { Formik, Form, FormikProps, FormikHelpers  } from 'formik'
import axios from '../../../api/axios'
import Button from '../../atoms/Button/Button'

interface CommentProps {
    ticketId: string
}

interface CommentFormValues {
    content: string
}

const CommentForm: React.FC<CommentProps> = ({
    ticketId
}) => {
    const initialValues: CommentFormValues = {
        content: '',
      }

    const handleSubmit = async (payload: CommentFormValues, actions: FormikHelpers<CommentFormValues>) => {
        try {
            const res = await axios.post(`/comments/tickets/${ticketId}`, payload)
            console.log('“Would normally send email here with body: ...”', res.data)
            actions.resetForm()
          } catch (error) {
            console.error('Error submitting ticket: ', error)
          } finally {
            actions.setSubmitting(false)
          }
    }

    return (
        <S.FormContainer>
            <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                handleSubmit(values, actions)
            }}
            >
                {({ isSubmitting, dirty }: FormikProps<CommentFormValues>) => {
                    return (
                        <S.FormComponent as={Form}>
                            <S.FieldElement
                            name='content'
                            placeholder='Add a comment...'
                            />
                            <S.ButtonContainer>
                                <Button
                                disabled={isSubmitting || !dirty}
                                padding='10px 20px'
                                >
                                    Comment
                                </Button>
                            </S.ButtonContainer>
                        </S.FormComponent>
                    )
                }}
            </Formik>
        </S.FormContainer>
    )
}

export default CommentForm
