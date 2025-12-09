import { RouterProvider } from 'react-router-dom'
import { Router } from '@/app/providers/Router'
import { QueryProvider  } from '@/app/providers/QueryProvider'

export default function App() {
  return (
    <QueryProvider >
      <RouterProvider router={Router} />
    </QueryProvider >
  )
}
