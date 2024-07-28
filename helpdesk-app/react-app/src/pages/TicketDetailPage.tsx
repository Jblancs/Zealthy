import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/axios'
import TicketDetailCard from '../components/molecules/TicketDetailCard/TicketDetailCard'
import { Ticket } from '../types'
import PageHeader from '../components/atoms/PageHeader/PageHeader'
import StatusForm from '../components/molecules/StatusForm/StatusForm'

const TicketDetailPage: React.FC = () => {
    const {id} = useParams<{id: string}>()
    const [ticket, setTicket] = useState<Ticket | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        const fetchTicket = async () => {
            try {
                const res = await axios.get<Ticket>(`/tickets/${id}`);
                setTicket(res.data)
              } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred')
            } finally {
              setIsLoading(false)
            }
        }
        fetchTicket()

        return () => {
            setTicket(null)
        }
    }, [])


    if (isLoading) return <PageHeader>Loading...</PageHeader>
    if (error) return <PageHeader>Error: {error}</PageHeader>;

    return (
        <div>
            <TicketDetailCard details={ticket} setTicket={setTicket}/>
        </div>
    )
}

export default TicketDetailPage
