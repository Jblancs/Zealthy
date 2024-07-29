import React from "react";
import * as S from './CommentCard.styles'
import { formatDate } from "../../../utils";

interface CommentCardProps {
    content: string,
    created_at: string
}

const CommentCard: React.FC<CommentCardProps> = ({
    content,
    created_at
}) => {
    return (
        <S.CommentCardContainer>
            <S.DateSection>
                {formatDate(created_at)}
            </S.DateSection>
            <S.ContentSection>
                {content}
            </S.ContentSection>
        </S.CommentCardContainer>
    )
}

export default CommentCard
