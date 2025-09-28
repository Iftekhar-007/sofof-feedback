"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const FeedBackList = ({ reload }) => {
  const [feedbacks, setFeedBacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/feedback");
        const data = await res.json();

        setFeedBacks(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [reload]);
  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        All Feedbacks
      </h2>

      <Marquee pauseOnHover>
        {feedbacks.map((fb, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition mx-5"
          >
            <h3 className="text-lg font-semibold text-gray-800">{fb.name}</h3>
            <p className="text-sm text-gray-500">{fb.email}</p>
            <p className="mt-2 text-gray-700">{fb.feedback}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default FeedBackList;
