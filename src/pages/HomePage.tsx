import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import HomeBanner from '@/components/features/home/HomeBanner';
import HomeAboutUs from '@/components/features/home/HomeAboutUs';
import HomeServices from '@/components/features/home/HomeServices';
import HomeInvestment from '@/components/features/home/HomeInvestment';
import HomeAnalysis from '@/components/features/home/HomeAnalysis';
import HomeInformation from '@/components/features/home/HomeInformation';
import HomeTestimonial from '@/components/features/home/HomeTestimonial';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector<HTMLElement>(location.hash);
      if (targetElement) {
        const targetPosition = targetElement.offsetTop - 100;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <HomeBanner />
      <section id="about">
        <HomeAboutUs />
      </section>
      <HomeServices />
      <HomeInvestment />
      <HomeAnalysis />
      <HomeTestimonial />
      <HomeInformation />
    </div>
  );
};

export default HomePage;
