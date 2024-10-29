import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "YOUR_API_KEY_HERE",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        access_key: "3734870b-b455-447d-82d9-fb34d411e590",
      }),
    });

    if (res.ok) {
      setResponseMessage("Message sent successfully!");
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setResponseMessage("Failed to send message. Please try again.");
      setIsSuccess(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-6 bg-gradient-to-r from-purple-300 to-blue-400">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-black drop-shadow-lg">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-300">
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-200"
        >
          Send Message
        </button>
      </form>
      {responseMessage && (
        <p className={`mt-4 text-center ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
          {responseMessage}
        </p>
      )}
    </section>
  );
};

export default Contact;
