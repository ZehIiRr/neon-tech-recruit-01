
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ValuesSection from '@/components/ValuesSection';
import BenefitsSection from '@/components/BenefitsSection';
import RecruitmentProcess from '@/components/RecruitmentProcess';
import JobOffersSection from '@/components/JobOffersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-dark font-space">
      <Navbar />
      <HeroSection />
      <ValuesSection />
      <BenefitsSection />
      <RecruitmentProcess />
      <JobOffersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
