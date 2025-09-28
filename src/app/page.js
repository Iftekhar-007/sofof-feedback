"use client";
import Image from "next/image";
import Form from "./Components/Form";
import FeedBackList from "./Components/FeedBackList";
import { useState } from "react";

export default function Home() {
  const [reload, setReload] = useState(0);
  const handleAdded = () => {
    setReload((prev) => prev + 1);
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <Form onFeedBackAdded={handleAdded}></Form>
      <FeedBackList reload={reload}></FeedBackList>
    </div>
  );
}
