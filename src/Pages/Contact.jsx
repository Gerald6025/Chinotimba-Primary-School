import React from 'react'
import ConBanner from '../Components/ConBanner'
import Connect from '../Components/Connect'
import Map from '../Components/Map'
import Student from '../Components/Student'

function Contact() {
  return (
    <div>
       <ConBanner/> 
         <Connect/>
      <Map/>
      <Student/>
    </div>
  )
}

export default Contact
