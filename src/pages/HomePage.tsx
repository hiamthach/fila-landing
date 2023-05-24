import HomeBanner from '@/components/features/home/HomeBanner';
import HomeAboutUs from '@/components/features/home/HomeAboutUs';
import HomeServices from '@/components/features/home/HomeServices';
import HomeInvestment from '@/components/features/home/HomeInvestment';
import HomeAnalysis from '@/components/features/home/HomeAnalysis';
import HomeInformation from '@/components/features/home/HomeInformation';
import HomeTestimonial from '@/components/features/home/HomeTestimonial';

const HomePage = () => {
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
