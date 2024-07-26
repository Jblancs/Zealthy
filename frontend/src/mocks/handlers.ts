import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/tickets', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        description: 'Issue 1',
        status: 'new',
      },
      // Add more mock data here
    ])
  }),
]
