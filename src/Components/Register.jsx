import React from 'react';

function Register() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 lg:p-16 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <img src="/logo.png" alt="School Logo" className="w-24 mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-maroon mb-6">Register</h1>
        <p className="mb-6 text-lg">
          Create an account to access school resources, news updates, and track your application progress.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input className="border p-3 rounded" type="text" placeholder="Full Name" name="fullName" required />
          <input className="border p-3 rounded" type="email" placeholder="Email Address" name="email" required />
          <input className="border p-3 rounded" type="password" placeholder="Password" name="password" required />
          <input className="border p-3 rounded" type="password" placeholder="Confirm Password" name="confirmPassword" required />
          <input className="border p-3 rounded md:col-span-2" type="tel" placeholder="Phone Number" name="phone" />
          <button type="submit" className="bg-maroon text-white px-6 py-3 rounded hover:bg-maroon-dark md:col-span-2">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
