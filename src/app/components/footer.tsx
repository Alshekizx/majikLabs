import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Footer Links */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-center">
            <li className="cursor-pointer hover:text-blue-400">Home</li>
            <li className="cursor-pointer hover:text-blue-400">About</li>
            <li className="cursor-pointer hover:text-blue-400">Projects</li>
            <li className="cursor-pointer hover:text-blue-400">Blogs</li>
            <li className="cursor-pointer hover:text-blue-400">Contact</li>
          </ul>
        </nav>

        {/* Copyright Section */}
        <div className="text-sm mb-4 md:mb-0 text-center">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 justify-center">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter hover:text-blue-400"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook hover:text-blue-400"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin hover:text-blue-400"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}