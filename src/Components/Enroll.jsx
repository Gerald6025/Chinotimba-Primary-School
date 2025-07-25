import React from 'react';

function Enroll() {
  return (
    <div className="min-h-screen   bg-[#1a18188c] bg-[url(desk.png)] bg-center bg-cover bg-blend-overlay p-4 md:p-8 lg:p-16 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <img src="images/chinotimba-primary 1.png" alt="" className="w-24 mb-4 object-cover" />
        <h1 className="text-3xl md:text-4xl font-bold text-[#640F24] mb-6">Enroll Now</h1>
        <p className="mb-6 text-lg">
          Welcome to the enrollment page for Chinotimba Primary School. Please fill in your details below to begin the enrollment process.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 " >
          <input className="border p-3 rounded" type="text" placeholder="Full Name" name="fullName" required />
          <input className="border p-3 rounded" type="email" placeholder="Email Address" name="email" required />
          <input className="border p-3 rounded" type="tel" placeholder="Phone Number" name="phone" required />
          <input className="border p-3 rounded" type="text" placeholder="Guardian's Name" name="guardianName" required />
          <input className="border p-3 rounded" type="text" placeholder="Grade Applying For" name="grade" required />
          <textarea className="border p-3 rounded md:col-span-2" placeholder="Additional Information" name="additionalInfo" />
          
          <div className="flex flex-col gap-4 md:col-span-2">
            <button type="submit" className="bg-Helenmaroon text-white  py-3 rounded w-40">
              Submit Application
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default Enroll;
