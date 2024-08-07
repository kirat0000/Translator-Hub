"use client";
import React, { useState } from 'react';
import Header from '../TranslatorHub/components/header';
import Footer from '../TranslatorHub/components/footer';

const About = () => {
  const [isSorted, setIsSorted] = useState(false);

  const originalContent = {
    paragraphs: [
      "Created by Jaskirat Singh",
      "TranslatorHub is a culmination of my dedication and hard work in my third semester for the course CPRG306. The website is designed to provide seamless translation services, integrating advanced technologies to offer users accurate and instant language translations.",
      "This project not only showcases my skills in software development but also reflects my passion for bridging communication gaps through technology. Enjoy exploring and using TranslatorHub for all your language translation needs!"
    ],
    features: [
      "Real-time language translation across multiple languages.",
      "User-friendly interface for easy navigation and operation.",
      "Integration with leading language processing APIs for accurate translations.",
      "Customizable settings to tailor the translation experience to individual user needs.",
      "Secure authentication process to protect user data and privacy."
    ]
  };


  const sortContent = () => {

    setIsSorted(!isSorted);
  };


  const getContent = () => {
    if (isSorted) {
      return {
        paragraphs: [...originalContent.paragraphs].sort(),
        features: [...originalContent.features].sort()
      };
    } else {
      return originalContent;
    }
  };

  const content = getContent();

  return (
    <>
    <Header/>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
          <h1 className="text-2xl font-bold text-center mb-4">About TranslatorHub</h1>
          
         
          
          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-md text-gray-600 text-center mb-4">
              {paragraph}
            </p>
          ))}
          
          <h2 className="text-xl font-bold text-center mb-3">Features of TranslatorHub:</h2>
          
          <ul className="list-disc list-inside mb-4">
            {content.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          
          <p className="text-md text-gray-600">
            This project not only showcases my skills in software development but also reflects 
            my passion for bridging communication gaps through technology. Enjoy exploring and 
            using TranslatorHub for all your language translation needs!
          </p>
          <button 
            onClick={sortContent} 
            className="mb-2 mt-4 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
           {!isSorted?"Sort":"Unsort"}
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
