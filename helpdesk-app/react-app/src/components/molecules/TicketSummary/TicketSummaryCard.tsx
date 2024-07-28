import React from 'react'
import * as S from './TicketSummaryCard.styles'

export interface Ticket {
  id: number
  name: string
  email: string
  description: string
  status: TicketStatus
}

export enum TicketStatus {
  New = 'new',
  InProgress = 'in-progress',
  Complete = 'complete',
}

const TicketSummaryCard: React.FC<{details: Ticket}> = ({
  details
}) => {
    const {id, description, name, status, email} = details;
  return (
    <>
    <S.CardContainer>
        <S.IdSection>
            #{id}
        </S.IdSection>
        <S.DescriptionSection>
            {description}
        </S.DescriptionSection>
        <S.CardSection>
            {name}
        </S.CardSection>
        <S.CardSection>
            {status}
        </S.CardSection>
        <S.CardSection>
            {email}
        </S.CardSection>
        <S.ButtonContainer>
            <S.Button>Details</S.Button>
        </S.ButtonContainer>
    </S.CardContainer>
    </>
)
}

export default TicketSummaryCard
