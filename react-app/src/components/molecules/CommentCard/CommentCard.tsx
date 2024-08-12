import React from 'react'
import { formatDate } from '@utils'
import './CommentCard.css'

interface CommentCardProps {
  content: string
  created_at: string
}

const CommentCard: React.FC<CommentCardProps> = ({ content, created_at }) => {
  return (
    <div className="comment-card-container">
      <div className="comment-date-section">{formatDate(created_at)}</div>
      <div className="comment-content-section">{content}</div>
    </div>
  )
}

export default CommentCard
