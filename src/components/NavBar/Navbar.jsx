import React, { useState } from "react";
// import "./Navbar.css";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 my-2">
          <div className="flex items-center my-2">
            <div className="pl-3 hover:cursor-pointer ">
              <Link href="/">
                <div
                  className="text-2xl m-0 font-black"
                  style={{ color: "#7E3AF2" }}
                >
                  UI
                </div>
                <div className="my-1 -mt-1 text-2xl font-normal">EDUCON</div>
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="hidden md:flex items-center space-x-2 font-normal ">
              {/* home  */}
              <Link href="/">
                <li className=" hover:underline px-3 py-2 rounded-md   font-medium">
                  Home
                </li>
              </Link>
              {/* courses  */}
              <Link href="/my-courses">
                <li className="hover:underline  px-3 py-2 rounded-md  font-medium">
                  Courses
                </li>
              </Link>
              {/* Mentors  */}
              <Link href="/mentors">
                <li className=" hover:underline  px-3 py-2 rounded-md  font-medium">
                  Mentors
                </li>
              </Link>
              {/* Resources */}
              {/* <Link href="/resources">
                <li className=" hover:underline  px-3 py-2 rounded-md  font-medium">
                  Resources
                </li>
              </Link> */}
              {/* Conferences  */}
              <Link href="/conferences">
                <li className=" hover:underline  px-3 py-2 rounded-md  font-medium">
                  Conferences
                </li>
              </Link>
              {/* Contact  */}
              <Link href="/contact">
                <li className=" hover:underline  px-3 py-2 rounded-md  font-medium">
                  Contact Us
                </li>
              </Link>
              {/* Academy */}
              <Link href="/academy-industry-partners">
                <li className=" hover:underline  px-3 py-2 rounded-md  font-medium">
                  Academy Industry Partners{" "}
                </li>
              </Link>

              {/* Login */}
              <Link href="/login">
                <button className="regb py-2.5 px-10 ml-4 ">Login</button>
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="text-black"
                onClick={toggleNavbar}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#7E3AF2]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* home */}
            <Link href="/">
              <li className=" hover:bg-purple-800 text-white px-3 py-2 rounded-md text-base font-medium">
                Home
              </li>
            </Link>

            {/* courses  */}
            <Link href="/my-courses">
              <li className="hover:bg-purple-800 text-white px-3 py-2 rounded-md text-sm font-medium">
                Courses
              </li>
            </Link>
            {/* Mentors  */}
            <Link href="/mentors">
              <li className=" hover:bg-purple-800 text-white px-3 py-2 rounded-md text-sm font-medium">
                Mentors
              </li>
            </Link>
            {/* Resources */}
            {/* <Link href="/resources">
              <li className=" hover:bg-purple-800 text-white px-3 py-2 rounded-md text-sm font-medium">
                Resources
              </li>
            </Link> */}
            {/* Conferences  */}
            <Link href="/conferences">
              <li className=" hover:bg-purple-800 text-white px-3 py-2 rounded-md text-sm font-medium">
                Conferences
              </li>
            </Link>
            {/* Contact  */}
            <Link href="/contact">
              <li className=" hover:bg-purple-800 text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact Us
              </li>
            </Link>
            {/* Academy */}
            <Link href="/academy-industry-partners">
              <li className=" hover:bg-purple-800 text-white px-3 py-2 rounded-md text-sm font-medium">
                Academy Industry Partners{" "}
              </li>
            </Link>

            {/* Login */}
            <Link href="/Login">
              <button className=" bg-white font-bold rounded my-2 py-2.5 px-6 ml-4 ">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
