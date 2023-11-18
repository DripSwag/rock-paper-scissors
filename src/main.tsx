import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SelectionPage from './routes/SelectionPage.js'
import ResultPage from './routes/ResultPage.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SelectionPage />,
  },
  {
    path: 'result',
    element: <ResultPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
