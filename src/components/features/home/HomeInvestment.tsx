import { clsx } from '@mantine/core';
import { useState } from 'react';

import { IconArrowRight } from '@tabler/icons-react';

import investmentImg1 from '@/assets/imgs/investment-1.png';

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
    <section id="investment" className="mb-[150px]">
      <div className="container">
        <div className="flex gap-8 items-end">
          <div className="flex-1">
            <h4 className="m-0 mb-[10px] uppercase text-primary font-bold">
              Xem chúng tôi làm gì
            </h4>
            <h5 className="m-0 mb-[20px] text-secondary font-bold text-[26px] leading-8  max-w-[60%]">
              Trường hợp tư vấn
            </h5>

            <div className="flex gap-10">
              {listTag.map((tag) => (
                <span
                  key={tag.name}
                  className={clsx(
                    'text-base cursor-pointer',
                    tag.name === activeTag && 'text-primary font-bold'
                  )}
                  onClick={() => setActiveTag(tag.name)}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <button className="bg-[#ACE2EB] rounded-md outline-none border-none py-4 px-7 font-sans text-base font-semibold">
            Xem tất cả
          </button>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 mt-[30px]">
        <img
          src={investmentImg1}
          alt=""
          className="min-h-[400px] w-full object-cover object-center"
        />

        <div className="py-8 px-6 bg-light">
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
        </div>
        <img
          src={investmentImg1}
          alt=""
          className="min-h-[400px] w-full object-cover object-center"
        />
        <div className="py-8 px-6 bg-light">
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
        </div>
        <div className="py-8 px-6 bg-light">
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
        </div>
        <img
          src={investmentImg1}
          alt=""
          className="min-h-[400px] w-full object-cover object-center"
        />

        <div className="py-8 px-6 bg-light">
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
        </div>
        <img
          src={investmentImg1}
          alt=""
          className="min-h-[400px] w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default HomeInvestment;
