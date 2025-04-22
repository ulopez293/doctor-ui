import { Navigate, Outlet } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"

import React from "react"
import { Navbar } from "../navbar/Navbar"
import { Footer } from "../footer/Footer"

interface ProtectedLayoutProps {
  isAuthenticated: boolean
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ isAuthenticated }) => {
  if (!isAuthenticated) return <Navigate to="/login" replace />

  return (
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Navbar />
      <Outlet />
      <Footer />
    </ProtectedRoute>
  )
}

export default ProtectedLayout
