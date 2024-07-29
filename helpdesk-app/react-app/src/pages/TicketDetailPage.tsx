import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/axios'
import TicketDetailCard from '../components/molecules/TicketDetailCard/TicketDetailCard'
import { Ticket, Comment } from '../types'
import PageHeader from '../components/atoms/PageHeader/PageHeader'
import CommentForm from '../components/molecules/CommentForm/CommentForm'
import * as S from './Page.styles'
import CommentList from '../components/molecules/CommentList/CommentList'

const TicketDetailPage: React.FC = () => {
    const {id} = useParams<{id: string}>()
    const [ticket, setTicket] = useState<Ticket | null>(null)
    const [comments, setComments] = useState<Comment[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const fetchTicket = async () => {
        try {
            const res = await axios.get<Ticket>(`/tickets/${id}`)
            setTicket(res.data)
          } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred')
        } finally {
          setIsLoading(false)
        }
    }

    const fetchComments = async () => {
        try {
            const res = await axios.get<Comment[]>(`/comments/tickets/${id}`);
            setComments(res.data)
          } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred')
        } finally {
          setIsLoading(false)
        }
    }

    useEffect(() => {
        const fetchData = () => {
            fetchTicket()
            fetchComments()
            setIsLoading(false)
        }
        fetchData()

        return () => {
            setTicket(null)
            setComments([])
        }
    }, [])

    if (isLoading || !ticket) return <PageHeader>Loading...</PageHeader>

    if (error) return <PageHeader>Error: {error}</PageHeader>;
    if (!id) {
        return <PageHeader>Error: Invalid ticket ID</PageHeader>;
    }

    return (
        <div>
            <TicketDetailCard details={ticket} setTicket={setTicket}/>
            <S.SectionHeader>Comments</S.SectionHeader>
            <CommentForm ticketId={id} fetchTicket={fetchComments}/>
            <CommentList comments={comments} />
        </div>
    )
}

export default TicketDetailPage
