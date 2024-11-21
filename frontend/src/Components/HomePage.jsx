import React from "react";
import BookSection from "./BookSection";
import TrendingSection from "./TrendingSection";

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <BookSection />
      <TrendingSection />
    </div>
  );
};

export default HomePage;
