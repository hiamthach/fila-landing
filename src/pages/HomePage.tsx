import HomeBanner from '@/components/features/home/HomeBanner';
import HomeAboutUs from '@/components/features/home/HomeAboutUs';
import HomeServices from '@/components/features/home/HomeServices';

const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <HomeAboutUs />
      <HomeServices />
    </div>
  );
};

export default HomePage;
