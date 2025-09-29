import Lottie from "lottie-react";
import feedbackAnim from "../../../public/mail.json";

const Banner = () => (
  <div className="flex flex-col items-center justify-center py-12 text-black">
    <h1 className="lg:text-4xl md:text-2xl text-xl font-bold mb-4">
      Share Your Feedback
    </h1>
    <p className="text-lg mb-6">We value your thoughts and suggestions 💡</p>
    <Lottie animationData={feedbackAnim} loop={true} className="w-64 h-64" />
  </div>
);

export default Banner;
