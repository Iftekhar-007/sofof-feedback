"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaEnvelope, FaRegClock, FaUserCircle } from "react-icons/fa";

const FeedBackList = ({ reload }) => {
  const [feedbacks, setFeedBacks] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("/api/feedback");
  //       const data = await res.json();

  //       setFeedBacks(data);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };

  //   fetchData();
  // }, [reload]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedBacks(data);
  }, [reload]);
  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        All Feedbacks
      </h2>

      <Marquee pauseOnHover>
        {feedbacks.map((fb, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition mx-5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
             break-words"
          >
            <div className="flex items-center gap-2 text-gray-700 font-semibold">
              <FaUserCircle className="text-blue-500" />
              {fb.name}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <FaEnvelope className="text-green-500" />
              {fb.email}
            </div>
            <p className="mt-3 text-gray-800 leading-relaxed whitespace-pre-line break-words">
              {fb.feedback}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default FeedBackList;
