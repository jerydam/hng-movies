import React from 'react';
import Link from 'next/link'; // Import Link from Next.js for navigation
import { FaSearch } from 'react-icons/fa'; // Import a search icon from a popular icon library (e.g., React Icons)

const Header = () => {
  return (
    <header className="">
      <nav className=" flex">
        <div className="flex">
          <div className="logo mr-4">
            <Link href="/">
              
                <img src="/logo.png" alt="Logo" className="w-40 " />
              
            </Link>
          </div>
          <div className="search ml-[100px] flex items-center rounded-md border hover:border-white focus:outline-solid p-2 text-[#fff]">
            <FaSearch className="text-[#fff] mr-2" />
            <input
              type="text"
              placeholder="Search for movies..."
              className="bg-transparent w-[500px] border-none focus:outline-none"
            />
          </div>
        </div>
        <div className="signup">
          <Link href="/"className="text-white px-4 ml-[100px] rounded-md py-2 hover:bg-gray-800">
              Sign Up
           
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
