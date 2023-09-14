"use client";
import Link from "next/link";
import About from "./About/page.js";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <About />
    </main>
  );
};

export default Home;
