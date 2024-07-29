import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import TicketSummaryCard from '../components/molecules/TicketSummary/TicketSummaryCard';
import PageHeader from '../components/atoms/PageHeader/PageHeader';
import { Ticket } from '../types';

const AdminPage: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)



  useEffect(() => {
    const fetchTickets = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get<Ticket[]>('/tickets/');
            setTickets(res.data)
          } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred')
        } finally {
          setIsLoading(false)
        }
    }
    fetchTickets();

    return () => {
      setTickets([]);
     }
    }, [])

  if (isLoading) return <PageHeader>Loading...</PageHeader>;
  if (error) return <PageHeader>Error: {error}</PageHeader>;

  const ticketList = (
    <>
      {tickets.length === 0 ? (<p>No tickets found.</p>) :
       (tickets.map((ticketObj: Ticket) => (
        <div key={ticketObj.id}>
          <TicketSummaryCard details={ticketObj} />
        </div>
      )))}
    </>
  )

  return (
    <div>
      <PageHeader>Tickets List</PageHeader>
      {ticketList}
    </div>
  );
}

export default AdminPage;
