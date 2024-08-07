import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-orange-400 to-pink-400 p-10">
    <h1 className="text-4xl font-bold text-black mb-8 text-center">CPRG-306 Final Project Submission</h1>
    <div className="bg-white p-8 shadow-2xl rounded-2xl max-w-lg mx-auto text-center text-gray-800 mt-8">
        <p className="text-3xl font-bold text-black">Southern Alberta Institute of Technology</p>
        <p className="text-xl text-gray-600">Calgary, Alberta</p>
        <p className="font-semibold text-2xl mt-6">Submitted to: Akinbode Olusola</p>
        <p className="font-semibold text-2xl">Submitted by: Jaskirat Singh</p>
        <p className="text-xl mt-4">Student ID: 000904709</p>
        <p className="text-xl">Subject: Web Development (CPRG306)</p>
        <p className="text-xl">Topic: TranslatorHub Website</p>
        <p className="text-xl">Course: Software Development</p>
    </div>
      <Link href="/TranslatorHub" className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition duration-300 hover:-translate-y-1 ">
         Link to open the project website
      </Link>
    </main>
  );
}
