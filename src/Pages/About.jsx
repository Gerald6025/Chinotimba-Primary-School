import React from 'react'
import Bannerp from '../Components/Bannerp';
import Discover from '../Components/Discover'
import Mission from '../Components/Mission'
import Why from '../Components/Why'
import Testimonials from '../Components/Testimonials'

function About() {
  return (
    <div>
        <Bannerp
        head=' "Shaping Future Leaders, One Learner at a Time" '
        story="Chinotimba Primary School is a vibrant and inclusive learning institution situated in the heart of Victoria Falls. For decades, we have been committed to providing quality primary education to the children of Chinotimba and surrounding communities."
        url="images/desk.png"
      />

      <Discover/>
      <Mission/>
      <Why/>
      <Testimonials/>
    </div>
  )
}

export default About
