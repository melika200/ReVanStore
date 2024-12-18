import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6  px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h1 className='font-bold text-xl pb-4'>ReVan Store</h1>
          <p className='italic text-sm'>your one-step fot all your needs.Shop with use and experience the best online shopping experiences.</p>
        </div>
        <div className="Quicklink md:text-center">
        <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 ">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">Shop</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">About</Link>
            </li>
          </ul>
        </div>
        <div className="followus">
        <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={24} className="text-blue-500 hover:text-blue-600" />
            </a>
            <a href="#"  className="hover:text-gray-400">
              <FaLinkedin size={24} className="text-blue-300 hover:text-blue-600"/>
            </a>
            <a href="#"  className="hover:text-gray-400">
              <FaTwitter size={24} className="text-blue-400 hover:text-blue-600"/>
            </a>
            <a href="#"  className="hover:text-gray-400">
              <FaGithub size={24} className="text-gray-500 hover:text-gray-600"/>
            </a>
            <a href="#" className='hover:text-gray-400'>
            <FaInstagram size={24} className="text-pink-500 hover:text-pink-600"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
