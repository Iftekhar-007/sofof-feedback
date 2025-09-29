"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const Form = ({ onFeedBackAdded }) => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await fetch("/api/feedback", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      const existing = JSON.parse(localStorage.getItem("feedbacks")) || [];

      const updated = [...existing, formData];

      localStorage.setItem("feedbacks", JSON.stringify(updated));

      setMessage("Feedback added successfully ✅");
      setMessageType("success");
      setformData({ name: "", email: "", feedback: "" });

      if (onFeedBackAdded) {
        onFeedBackAdded();
      } else {
        setMessage("Something went wrong");
        setMessageType("failed");
      }
    } catch (error) {
      console.log(error);
      setMessage("Error happened to add data");
      setMessageType("failed");
    }

    setTimeout(() => {
      setMessage();
    }, 3000);
  };
  return (
    <div className="flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-7xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Give Your Feedback Here
        </h2>

        {/* Name Field */}
        <div className="flex items-center border rounded-lg px-3 py-2">
          <FaUser className="text-black mr-2" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full outline-none text-black"
          />
        </div>

        {/* Email Field */}
        <div className="flex items-center border rounded-lg px-3 py-2">
          <FaEnvelope className="text-black mr-2" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full outline-none text-black"
          />
        </div>

        {/* Feedback Field */}
        <div className="flex items-start border rounded-lg px-3 py-2">
          <FaCommentDots className="text-black mr-2 mt-1" />
          <textarea
            type="textarea"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder="Write your feedback..."
            required
            className="w-full outline-none text-black resize-none"
            rows="6"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
        >
          Submit
        </button>

        {message && (
          <p
            className={`text-left font-medium mt-2 ${
              messageType === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
