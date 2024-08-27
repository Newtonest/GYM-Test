import { Route, Routes } from "react-router-dom"
import AuthRoutes from "../auth/AuthRoutes"
import GymAppRoutes from "../pages/GymAppRoutes"

const AppRouter = () => {
  return (
    <Routes>
        {/* Auth */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/* Pages */}
        <Route path="/*" element={ <GymAppRoutes /> } />
    </Routes>
  )
}

export default AppRouter
