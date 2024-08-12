import React from 'react'
import { useNavigate } from 'react-router-dom'
import './TicketSummaryCard.css'
import '@styles/App.css'
import { Ticket } from '@types'

const TicketSummaryCard: React.FC<{ details: Ticket }> = ({ details }) => {
  const navigate = useNavigate()
  const { id, description, name, status, email } = details

  const handleClick = () => {
    navigate(`/ticket/${id}`)
  }
  return (
    <>
      <div className='summary-card' onClick={handleClick}>
        <div className='summary-section centered border-left'>#{id}</div>
        <div className='summary-section'>{description}</div>
        <div className='summary-section'>{name}</div>
        <div className='summary-section'>{email}</div>
        <div className='summary-section'>{status}</div>
      </div>
    </>
  )
}

export default TicketSummaryCard
