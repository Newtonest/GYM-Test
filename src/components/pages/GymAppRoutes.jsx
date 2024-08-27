import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import ExplorePage from "./ExplorePage"
import ProfilePage from "./ProfilePage"

const GymAppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="explore" element={ <ExplorePage /> } />
        <Route path="profile" element={ <ProfilePage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}

export default GymAppRoutes
