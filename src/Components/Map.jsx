import React from 'react'

const Map = () => {
  return (
    <div className='pb-10'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.132372975467!2d25.8278435743714!3d-17.940180779441835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x194fe53d59200147%3A0x4361d269b30844eb!2sCHINOTIMBA%20PRIMARY%20SCHOOL!5e1!3m2!1sen!2szw!4v1752683264283!5m2!1sen!2szw" 
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default Map
