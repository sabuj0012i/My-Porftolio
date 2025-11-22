import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Expertise from '../Components/Expertise'
import ProjectCard from '../Components/ProjectCard'
import FeaturedProjects from '../Components/FeaturedProjects'
import Services from '../Components/Services'
import ContactWithMe from '../Components/ContactWithMe'
const portfolio = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div><Hero/></div>
      <div><Expertise/> </div>
      <div><FeaturedProjects/></div>
      <div><Services/></div>
      <div><ContactWithMe/></div>
    </div>
  )
}

export default portfolio
