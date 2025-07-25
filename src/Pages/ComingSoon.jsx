import React from 'react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] to-[#000000] text-white flex items-center justify-center p-6">
      <div className="text-center max-w-xl">
        {/* Logo or Brand */}
        <h1 className="text-4xl font-bold mb-4 tracking-widest">Chinotimba Primary School</h1>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Coming Soon</h2>

        {/* Short message */}
        <p className="text-lg md:text-xl mb-6">
          We're working hard to launch our new website. Stay tuned for something amazing!
        </p>

        {/* Optional: Email Signup */}
        <form className="flex flex-col md:flex-row items-center gap-2 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-md bg-white text-red-800 w-full md:w-auto"
          />
          <button
            type="submit"
            className="bg-white text-red-800 px-4 py-2 rounded-md font-semibold hover:bg-red-500 transition"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;
