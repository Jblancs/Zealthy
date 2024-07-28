export enum TicketStatus {
  New = 'new',
  InProgress = 'in-progress',
  Complete = 'complete',
}

export interface Ticket {
  id: number
  name: string
  email: string
  description: string
  status: TicketStatus
}
