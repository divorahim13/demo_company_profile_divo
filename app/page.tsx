import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ProcessTimeline from '@/components/ProcessTimeline';
import WhyChooseUs from '@/components/WhyChooseUs';
import VisionMission from '@/components/VisionMission';
import Partners from '@/components/Partners';
import ProjectsPreview from '@/components/ProjectsPreview';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProcessTimeline />
      <WhyChooseUs />
      <VisionMission />
      <Partners />
      <ProjectsPreview />
      <Testimonials />
      <Team />
      <CTA />
      <Footer />
      
      {/* 
          Additional sections like Projects, etc. 
          can be added here as requested by the user.
      */}
    </main>
  );
}
