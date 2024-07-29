import React from 'react'
import * as S from './TicketDetail.styles'
import { Ticket } from '../../../types'
import PageHeader from '../../atoms/PageHeader/PageHeader'
import StatusForm from '../StatusForm/StatusForm'

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
      <S.CardContainer>
        <PageHeader>Loading ticket details...</PageHeader>
      </S.CardContainer>
    )
  }

  const { id, name, description, status, email } = details

  return (
    <S.CardContainer>
      <PageHeader>Support Ticket #{id}</PageHeader>
      <StatusForm currentStatus={status} ticketId={id} setTicket={setTicket}/>
      <S.CreatedByContainer>
        <S.CreatedBySection>
          <strong>Created By:</strong> {name}
        </S.CreatedBySection>
        <S.CreatedBySection>
          <strong>Email:</strong> {email}
        </S.CreatedBySection>
      </S.CreatedByContainer>
      <S.DescriptionContainer>
        <strong>Description:</strong>
        <S.DescriptionSection>{description}</S.DescriptionSection>
      </S.DescriptionContainer>
    </S.CardContainer>
  )
}

export default TicketDetailCard
