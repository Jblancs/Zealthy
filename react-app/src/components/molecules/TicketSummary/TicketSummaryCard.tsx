import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './TicketSummaryCard.styles'
import { Ticket } from '../../../types'
import Button from '../../atoms/Button/Button'
import { truncateText } from '../../../utils'

const TicketSummaryCard: React.FC<{ details: Ticket }> = ({ details }) => {
  const navigate = useNavigate()
  const { id, description, name, status, email } = details

  const handleClick = () => {
    navigate(`/ticket/${id}`)
  }
  return (
    <>
      <S.CardContainer>
        <S.IdSection>#{id}</S.IdSection>
        <S.DescriptionSection>{truncateText(description,20)}</S.DescriptionSection>
        <S.CardSection>{truncateText(name, 20)}</S.CardSection>
        <S.CardSection>{truncateText(email, 20)}</S.CardSection>
        <S.CardSection>{status}</S.CardSection>
        <S.ButtonContainer>
          <Button onClick={handleClick}>Details</Button>
        </S.ButtonContainer>
      </S.CardContainer>
    </>
  )
}

export default TicketSummaryCard
