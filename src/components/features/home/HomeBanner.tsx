const HomeBanner = () => {
  return (
    <section
      className="w-full text-white bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center bg-home-banner"
      style={{
        height: 'calc(100vh - 60px)',
      }}
    >
      <h3 className="text-5xl font-bold">We bring success to you</h3>
      <p className="text-sm font-normal text-center mt-4 mb-10 max-w-md">
        Lorem ipsum dolor sit amet consectetur. Cras iaculis sed morbi et nisl
        lorem lorem pharetra velit.
      </p>

      <button className="font-sans outline-none border-none rounded-[28px] bg-white text-black font-bold w-[180px] h-14">
        Contact us
      </button>
    </section>
  );
};

export default HomeBanner;
