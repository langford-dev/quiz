import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quiz app</title>
      </Head>
      <div className="h-screen bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col text-white">
        <h1 className="text-6xl font-bold text-center py-32">QUIZ APP</h1>
      </div>
    </>
  );
}
