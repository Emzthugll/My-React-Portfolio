"use client";
import React, { useState, useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Loader from "@/components/ui/Loader"; // Import the Loader component

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="font-ui">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </main>
  );
}
