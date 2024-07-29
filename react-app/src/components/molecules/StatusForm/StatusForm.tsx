import React from "react";
import { Formik, Form, Field, FormikProps, FormikHelpers } from 'formik'
import * as S from './StatusForm.styles'
import axios from '../../../api/axios'
import Button from "../../atoms/Button/Button";
import { TicketStatus } from "../../../types";
import { Ticket } from "../../../types";

interface StatusFormProps {
    currentStatus: TicketStatus
    ticketId: number
    setTicket: React.Dispatch<React.SetStateAction<Ticket | null>>
}

interface FormValues {
    status: TicketStatus
}

const StatusForm: React.FC<StatusFormProps> = ({
    currentStatus,
    ticketId,
    setTicket
}) => {
    const initialValues: FormValues = {
        status: currentStatus
    }

    const handleSubmit = async (payload: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            const res = await axios.put(`/tickets/${ticketId}`, payload)
            setTicket(res.data)
            console.log('Ticket updated successfully', res.data)
            actions.resetForm()
          } catch (error) {
            console.error('Error submitting ticket: ', error)
          } finally {
            actions.setSubmitting(false)
          }
    }

    return (
        <S.StatusFormContainer>
            <S.StatusHeading>
                Status:
            </S.StatusHeading>
            <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            onSubmit={(values, actions) => {
                handleSubmit(values, actions)
            }}
            >
                {({isSubmitting, values}: FormikProps<FormValues>) => {
                    return (
                        <S.FormComponent as={Form}>
                            <Field as='select' name='status' >
                                <option value={'new'}>new</option>
                                <option value={'in-progress'}>in progress</option>
                                <option value={'completed'}>completed</option>
                            </Field>
                            {values.status !== currentStatus && (<Button padding="0px 10px" disabled={isSubmitting}>Save Changes</Button>)}
                        </S.FormComponent>
                    )
                }}
            </Formik>
        </S.StatusFormContainer>
    )
}

export default StatusForm
