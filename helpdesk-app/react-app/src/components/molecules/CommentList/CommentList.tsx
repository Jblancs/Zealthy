import React from "react";
import * as S from './CommentList.styles'
import { Comment } from "../../../types";
import CommentCard from "../CommentCard/CommentCard";

interface CommentsListProps {
    comments: Comment[]
}

const CommentList: React.FC<CommentsListProps> = ({
    comments
}) => {


    return (
        <S.ListContainer>
            {comments.length > 0 && (
                comments.map((commentObj: Comment) => (
                    <div key={commentObj.id}>
                        <CommentCard content={commentObj.content} created_at={commentObj.created_at} />
                    </div>
                ))
            )}
        </S.ListContainer>
    )
}

export default CommentList
