import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <section
      className="w-full text-white bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center bg-home-banner"
      style={{
        height: 'calc(100vh - 60px)',
      }}
    >
      <h3 className="text-4xl md:text-5xl font-bold text-center">
        We bring success to you
      </h3>
      <p className="text-sm font-normal text-center mt-2 md:mt-4  mb-6 md:mb-10 max-w-md">
        Lorem ipsum dolor sit amet consectetur. Cras iaculis sed morbi et nisl
        lorem lorem pharetra velit.
      </p>

      <Link
        to={'/#footer'}
        className="no-underline flex items-center justify-center font-sans outline-none border-none rounded-[28px] bg-white text-black font-bold w-[180px] h-14"
      >
        Contact us
      </Link>
    </section>
  );
};

export default HomeBanner;
