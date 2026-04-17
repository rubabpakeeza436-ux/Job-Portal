import React from 'react'
import HeroSection from "./HeroSection"
import { Navigate } from 'react-router-dom'
import HowitWorks from "./HowitWorks"
import PopularCategories from "./PopularCategories" 
import PopularCampanies from "./PopularCampanies"
import { useSelector } from 'react-redux'
function Home() {
   const { user } = useSelector((state) => state.auth)
  if (!user) {
    return <Navigate to={"/login"} />
  }

  return (
    <>
    <HeroSection/>
     <HowitWorks/>
     < PopularCategories/>
     < PopularCampanies/>
    </>
  )
}

export default Home