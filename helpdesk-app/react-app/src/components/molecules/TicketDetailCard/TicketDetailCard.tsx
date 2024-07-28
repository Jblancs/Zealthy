import React, { useEffect, useState } from 'react'
import * as S from './TicketDetail.styles'
import { Ticket } from '../../../types'

const TicketDetailCard: React.FC<{details: Ticket | null}>= ({
    details
}) => {
    if (!details) {
        return (
          <S.CardContainer>
            <S.TicketHeader>Loading ticket details...</S.TicketHeader>
          </S.CardContainer>
        )
    }

    const { id, name, description, status, email } = details

    return (
        <S.CardContainer>
            <S.TicketHeader>
                Support Ticket #{id}
            </S.TicketHeader>
            <div>
                Status: {status}
            </div>
            <S.CreatedByContainer>
                <S.CreatedBySection><strong>Created By:</strong> {name}</S.CreatedBySection>
                <S.CreatedBySection><strong>Email:</strong> {email}</S.CreatedBySection>
            </S.CreatedByContainer>
            <S.DescriptionContainer>
                <strong>Description:</strong>
                <S.DescriptionSection>
                    {description}
                </S.DescriptionSection>
            </S.DescriptionContainer>
        </S.CardContainer>
    )
}

export default TicketDetailCard
