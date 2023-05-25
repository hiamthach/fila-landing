import { clsx } from '@mantine/core';
import { useState } from 'react';

import { IconArrowRight } from '@tabler/icons-react';

import investmentImg1 from '@/assets/imgs/investment/investment1.png';
import investmentImg2 from '@/assets/imgs/investment/investment2.png';
import investmentImg3 from '@/assets/imgs/investment/investment3.png';
import investmentImg4 from '@/assets/imgs/investment/investment4.png';

import { motion } from 'framer-motion';

const HomeInvestment = () => {
  const [activeTag, setActiveTag] = useState('all');

  const listTag = [
    {
      name: 'all',
      label: 'Tất cả',
    },
    {
      name: 'opinion',
      label: 'Quan điểm',
    },
    {
      name: 'investment',
      label: 'Triết lý đầu tư',
    },
  ];

  return (
    <section id="investment" className="section-margin">
      <div className="container">
        <div className="flex gap-8 items-start sm:items-end flex-wrap flex-col sm:flex-row">
          <div className="flex-1">
            <motion.h4
              initial={{ opacity: 0, translateY: -50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="m-0 mb-[10px] uppercase text-primary font-bold"
            >
              Xem chúng tôi làm gì
            </motion.h4>
            <motion.h5
              initial={{ opacity: 0, translateY: -30 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="m-0 mb-[20px] text-secondary font-bold text-[26px] leading-8 w-full max-w-full md:max-w-[60%]"
            >
              Trường hợp tư vấn
            </motion.h5>

            <div className="flex gap-2 md:gap-10">
              {listTag.map((tag, index) => (
                <motion.span
                  initial={{ opacity: 0, translateY: -(50 + index * 10) }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  key={tag.name}
                  className={clsx(
                    'text-base cursor-pointer',
                    tag.name === activeTag && 'text-primary font-bold'
                  )}
                  onClick={() => setActiveTag(tag.name)}
                >
                  {tag.label}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.button
            initial={{ opacity: 0, translateY: -100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#ACE2EB] rounded-md outline-none border-none py-4 px-7 font-sans text-base font-semibold"
          >
            Xem tất cả
          </motion.button>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-[30px]">
        <motion.img
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src={investmentImg1}
          alt=""
          className="min-h-[400px] h-full w-full object-cover object-center"
        />

        <motion.div
          initial={{ opacity: 0, translateY: 110 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.64 }}
          className="py-8 px-6 bg-light"
        >
          <h6 className="text-lg text-secondary font-bold mb-2">
            Quản trị rủi ro
          </h6>

          <p className="text-sm font-normal mb-6">
            Dự án về Quản trị rủi ro là một dự án nhằm tăng cường khả năng đối
            phó với các rủi ro trong quản lý và hoạt động kinh doanh...
          </p>

          <span className="text-[#6f6f6f] text-sm font-medium">Trường hợp</span>
          <p className="text-secondary font-semibold text-sm mb-4">
            Triết lý đầu tư
          </p>

          <span className="text-[#6f6f6f] text-sm font-medium">Ngày</span>
          <p className="text-secondary font-semibold text-sm mb-4">
            26/12/2022
          </p>

          <span className="text-[#6f6f6f] text-sm font-medium">Lĩnh vực</span>
          <p className="text-secondary font-semibold text-sm mb-4">Tài chính</p>

          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-secondary">
            <IconArrowRight size={20} />
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, translateY: 130 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src={investmentImg2}
          alt=""
          className="min-h-[400px] h-full w-full object-cover object-center"
        />
        <motion.div
          initial={{ opacity: 0, translateY: 140 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72 }}
          className="py-8 px-6 bg-light"
        >
          <h6 className="text-lg text-secondary font-bold mb-2">
            Đầu tư theo xu hướng
          </h6>

          <p className="text-sm font-normal mb-6">
            Đầu tư theo xu hướng là một phương pháp đầu tư dựa trên việc phân
            tích xu hướng của thị trường và các cổ phiếu...
          </p>

          <span className="text-[#6f6f6f] text-sm font-medium">Trường hợp</span>
          <p className="text-secondary font-semibold text-sm mb-4">Quan điểm</p>

          <span className="text-[#6f6f6f] text-sm font-medium">Ngày</span>
          <p className="text-secondary font-semibold text-sm mb-4">
            25/12/2022
          </p>

          <span className="text-[#6f6f6f] text-sm font-medium">Lĩnh vực</span>
          <p className="text-secondary font-semibold text-sm mb-4">Tài chính</p>

          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-secondary">
            <IconArrowRight size={20} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-8 px-6 bg-light"
        >
          <h6 className="text-lg text-secondary font-bold mb-2">
            Thời điểm đầu tư là chìa khóa
          </h6>

          <p className="text-sm font-normal mb-6">
            Thời điểm đầu tư là một trong những yếu tố quan trọng để đạt được
            lợi nhuận. Đầu tư quá sớm có thể dẫn đến rủi ro tài...
          </p>

          <span className="text-[#6f6f6f] text-sm font-medium">Trường hợp</span>
          <p className="text-secondary font-semibold text-sm mb-4">
            Triết lý đầu tư
          </p>

          <span className="text-[#6f6f6f] text-sm font-medium">Ngày</span>
          <p className="text-secondary font-semibold text-sm mb-4">
            22/12/2022
          </p>

          <span className="text-[#6f6f6f] text-sm font-medium">Lĩnh vực</span>
          <p className="text-secondary font-semibold text-sm mb-4">Tài chính</p>

          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-secondary">
            <IconArrowRight size={20} />
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, translateY: 110 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.64 }}
          src={investmentImg3}
          alt=""
          className="min-h-[400px] h-full w-full object-cover object-center"
        />

        <motion.div
          initial={{ opacity: 0, translateY: 130 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-8 px-6 bg-light"
        >
          <h6 className="text-lg text-secondary font-bold mb-2">
            Kỹ luật trong đầu tư
          </h6>

          <p className="text-sm font-normal mb-6">
            Kỷ luật trong đầu tư là một khía cạnh quan trọng của việc đầu tư. Nó
            đảm bảo rằng các quyết định đầu tư được đưa ra...
          </p>

          <span className="text-[#6f6f6f] text-sm font-medium">Trường hợp</span>
          <p className="text-secondary font-semibold text-sm mb-4">Quan điểm</p>

          <span className="text-[#6f6f6f] text-sm font-medium">Ngày</span>
          <p className="text-secondary font-semibold text-sm mb-4">
            18/12/2022
          </p>

          <span className="text-[#6f6f6f] text-sm font-medium">Lĩnh vực</span>
          <p className="text-secondary font-semibold text-sm mb-4">Tài chính</p>

          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-secondary">
            <IconArrowRight size={20} />
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, translateY: 140 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72 }}
          src={investmentImg4}
          alt=""
          className="min-h-[400px] h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default HomeInvestment;
