"use client";

import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import TrustBar from "@/app/components/TrustBar";
import Services from "@/app/components/Services";
import Testimonials from "@/app/components/Testimonials";
import Booking from "@/app/components/Booking";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <TrustBar />
        <Services />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
