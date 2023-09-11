import React from 'react';
import Link from 'next/link'; 

const Header = () => {
  return (
    <header className="text-white py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <Link href="/">
            
              <img src="/logo.png" alt="Logo" className="w-20 h-auto" />
          
          </Link>
        </div>
        <div className="search flex items-center">
          <input
            type="text"
            placeholder="Search for movies..."
            className="p-2 rounded-md border border-gray-500 mr-2"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Search
          </button>
        </div>
        <div className="signup">
          <Link href="/signup" className="text-white border border-white px-4 py-2 rounded-md hover:bg-gray-800">
              Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
