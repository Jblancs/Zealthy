import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import TicketSummaryCard, { TicketStatus } from '../components/molecules/TicketSummary/TicketSummaryCard';

export interface Ticket {
  id: number;
  name: string;
  email: string;
  description: string;
  status: TicketStatus;
}

const AdminPage: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)


  const fetchTickets = async () => {
      setIsLoading(true)
      try {
          const res = await axios.get<Ticket[]>('/tickets/');
          console.log(res.data)
          setTickets(res.data)
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An unknown error occurred')
      } finally {
        setIsLoading(false)
      }
  }

  useEffect(() => {
    fetchTickets();

    return () => {
      setTickets([]);
     }
    }, [])

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
      <h1>Tickets List</h1>
      {ticketList}
    </div>
  );
}

export default AdminPage;
