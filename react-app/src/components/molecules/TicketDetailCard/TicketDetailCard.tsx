import React from 'react'
import { Ticket } from '../../../types'
import PageHeader from '@components/atoms/PageHeader/PageHeader'
import StatusForm from '../StatusForm/StatusForm'
import './TicketDetailCard.css'



interface DetailCardProps {
    details: Ticket | null;
    setTicket: React.Dispatch<React.SetStateAction<Ticket | null>>;
}

const TicketDetailCard: React.FC<DetailCardProps> = ({
  details,
  setTicket
}) => {

  if (!details) {
    return (
      <div className='detail-container'>
        <PageHeader>Loading ticket details...</PageHeader>
      </div>
    )
  }

  const { id, name, description, status, email } = details

  return (
    <div className='detail-container'>
      <PageHeader>Support Ticket #{id}</PageHeader>
      <StatusForm currentStatus={status} ticketId={id} setTicket={setTicket}/>
      <div className='detail-creator-container'>
        <div className='detail-creator-section'>
          <span><strong>Created By:</strong></span> <span>{name}</span>
        </div>
        <div className='detail-creator-section'>
          <span><strong>Email:</strong></span> <span>{email}</span>
        </div>
      </div>
      <div className='detail-desc-container'>
        <strong>Description:</strong>
        <div className='detail-desc-section'>{description}</div>
      </div>
    </div>
  )
}

export default TicketDetailCard
