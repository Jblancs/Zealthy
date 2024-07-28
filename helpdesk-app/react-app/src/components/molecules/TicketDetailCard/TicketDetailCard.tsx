import React from 'react'
import * as S from './TicketDetail.styles'
import { Ticket } from '../../../types'
import PageHeader from '../../atoms/PageHeader/PageHeader'

const TicketDetailCard: React.FC<{details: Ticket | null}>= ({
    details
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
            <PageHeader>
                Support Ticket #{id}
            </PageHeader>
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
