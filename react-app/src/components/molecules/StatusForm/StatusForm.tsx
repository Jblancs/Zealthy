import React from "react";
import { Formik, Form, Field, FormikProps, FormikHelpers } from 'formik'
import axios from '@api/axios'
import Button from "@components/atoms/Button/Button";
import { TicketStatus, Ticket } from "@types";
import '@styles/App.css'
import './StatusForm.css'

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
            actions.resetForm()
            alert('Status updated successful!')
          } catch (error) {
            console.error('Error updating status: ', error)
          } finally {
            actions.setSubmitting(false)
          }
    }

    return (
        <div className='status-form-container'>
            <div className="bold">
                Status:
            </div>
            <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            onSubmit={(values, actions) => {
                handleSubmit(values, actions)
            }}
            >
                {({isSubmitting, values}: FormikProps<FormValues>) => {
                    return (
                        <Form className='status-form-element'>
                            <Field as='select' name='status' >
                                <option value={'new'}>new</option>
                                <option value={'in-progress'}>in progress</option>
                                <option value={'completed'}>completed</option>
                            </Field>
                            {values.status !== currentStatus && (<Button padding="0px 10px" disabled={isSubmitting}>Save Changes</Button>)}
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default StatusForm
