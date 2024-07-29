export type TicketStatus = 'new' | 'in-progress' | 'completed'

export interface Ticket {
  id: number
  name: string
  email: string
  description: string
  status: TicketStatus
  created_at: string
  updated_at: string
}

export interface Comment {
  id: number,
  ticket_id: number,
  content: string,
  created_at: string
}
