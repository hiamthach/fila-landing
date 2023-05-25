import { useEffect, lazy } from 'react';

import { useLocation } from 'react-router-dom';

import HomeBanner from '@/components/features/home/HomeBanner';
import HomeAboutUs from '@/components/features/home/HomeAboutUs';

const HomeInformation = lazy(
  () => import('@/components/features/home/HomeInformation')
);

const HomeServices = lazy(
  () => import('@/components/features/home/HomeServices')
);

const HomeInvestment = lazy(
  () => import('@/components/features/home/HomeInvestment')
);

const HomeAnalysis = lazy(
  () => import('@/components/features/home/HomeAnalysis')
);

const HomeTestimonial = lazy(
  () => import('@/components/features/home/HomeTestimonial')
);

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
      <HomeAboutUs />
      <HomeServices />
      <HomeInvestment />
      <HomeAnalysis />
      <HomeTestimonial />
      <HomeInformation />
    </div>
  );
};

export default HomePage;
