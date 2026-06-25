import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/AppRoutes'
import { AuthProvider } from './Conetext/AuthContext'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>
)
