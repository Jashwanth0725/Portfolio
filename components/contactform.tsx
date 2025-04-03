import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 md:p-10 rounded-lg shadow-lg">
      {/* Heading */}
      {/* <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Get in Touch
      </h1> */}

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-x-8">
        {/* Contact Form on the Left */}
        <form className="flex-1 bg-transparent p-6 md:p-10 rounded-lg shadow-lg w-full">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Contact Me
          </h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full px-6 py-3 text-lg font-bold text-white uppercase transition-all duration-200 ease-in-out bg-blue-500 hover:bg-blue-400 rounded-lg shadow-lg">
            Send a Message
          </button>
        </form>

        {/* Contact Image on the Right
        <div className="hidden md:block md:w-1/2">
          <img
            src="/contact-image.jpg"
            alt="Contact Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ContactForm;
