import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const HomeBanner = () => {
  return (
    <section
      className="w-full text-white bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center bg-home-banner"
      style={{
        height: 'calc(100vh - 60px)',
      }}
    >
      <motion.h3
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center"
      >
        We bring success to you
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-sm font-normal text-center mt-2 md:mt-4  mb-6 md:mb-10 max-w-md"
      >
        Lorem ipsum dolor sit amet consectetur. Cras iaculis sed morbi et nisl
        lorem lorem pharetra velit.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, translateY: -30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Link
          to={'/#footer'}
          className="no-underline flex items-center justify-center font-sans outline-none border-none rounded-[28px] bg-white text-black font-bold w-[180px] h-14"
        >
          Contact us
        </Link>
      </motion.div>
    </section>
  );
};

export default HomeBanner;
