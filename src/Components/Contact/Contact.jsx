import React, { useState } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ModalContact from "./ModalContact";
export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });
  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      localStorage.setItem("formData", JSON.stringify(values));
      setIsModalOpen(true);
      resetForm();
    },
  });
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-36">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-blue-500 mr-2" />
              <p>info@ReVanStore.com</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-blue-500 mr-2" />
              <p>+123 456 7890</p>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkedAlt className="text-blue-500 mr-2" />
              <p>123 Travel ST,City,Country</p>
            </div>
            <div className="Quicklink">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="mt-4 space-y-2 ">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:underline">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="followus">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-gray-400">
                  <FaFacebook
                    size={24}
                    className="text-blue-500 hover:text-blue-600"
                  />
                </a>
                <a href="#" className="hover:text-gray-400">
                  <FaLinkedin
                    size={24}
                    className="text-blue-300 hover:text-blue-600"
                  />
                </a>
                <a href="#" className="hover:text-gray-400">
                  <FaTwitter
                    size={24}
                    className="text-blue-400 hover:text-blue-600"
                  />
                </a>
                <a href="#" className="hover:text-gray-400">
                  <FaGithub
                    size={24}
                    className="text-gray-500 hover:text-gray-600"
                  />
                </a>
                <a href="#" className="hover:text-gray-400">
                  <FaInstagram
                    size={24}
                    className="text-pink-500 hover:text-pink-600"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write Message"
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded"
              >
                Send Message
              </button>
            </form>
            <ModalContact isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
          </div>
        </div>
      </div>
    </div>
  );
}
