"use client";
import Image from "next/image";
import Form from "./Components/Form";
import FeedBackList from "./Components/FeedBackList";
import { useState } from "react";
import Banner from "./Components/Banner";

export default function Home() {
  const [reload, setReload] = useState(false);
  const handleAdded = () => {
    setReload(!reload);
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* childrens here */}
      <Banner></Banner>
      <Form onFeedBackAdded={handleAdded}></Form>
      <FeedBackList reload={reload}></FeedBackList>
    </div>
  );
}
