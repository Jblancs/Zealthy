import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/axios'
import { Ticket } from '../types'

const TicketDetailPage: React.FC = () => {
    const {id} = useParams()
    const [ticket, setTicket] = useState<Ticket | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const fetchTicket = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get<Ticket>('/tickets/');
            console.log(res.data)
            setTicket(res.data)
          } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred')
        } finally {
          setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchTicket()
    }, [])

    if (!ticket) return <p>Loading...</p>
    
    return (
        <div>
            Ticket Details
        </div>
    )
}

export default TicketDetailPage
