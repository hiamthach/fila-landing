import { useState } from 'react';
import { clsx, Accordion } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

import helpers from '@/config/helpers/general';

import { motion } from 'framer-motion';

const { generateLoremIpsum } = helpers;

const HomeInformation = () => {
  const [activeTag, setActiveTag] = useState('2023');

  const listTag = [
    {
      name: '2023',
      label: '2023',
    },
    {
      name: '2022',
      label: '2022',
    },
    {
      name: '2021',
      label: '2021',
    },
  ];

  const contents = [
    {
      title: 'Kế hoạch thúc đẩy tăng trưởng kinh tế của Chính phủ Việt Nam',
      date: '21/05/2023',
    },
    {
      title: 'Kế hoạch thúc đẩy tăng trưởng kinh tế của Chính phủ Việt Nam',
      date: '21/05/2023',
    },
    {
      title: 'Kế hoạch thúc đẩy tăng trưởng kinh tế của Chính phủ Việt Nam',
      date: '21/05/2023',
    },
    {
      title: 'Kế hoạch thúc đẩy tăng trưởng kinh tế của Chính phủ Việt Nam',
      date: '21/05/2023',
    },
    {
      title: 'Kế hoạch thúc đẩy tăng trưởng kinh tế của Chính phủ Việt Nam',
      date: '21/05/2023',
    },
  ];
  return (
    <>
      <motion.section
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container section-margin"
      >
        <h4 className="m-0 mb-[10px] uppercase text-primary font-bold">
          Thông tin & Phân tích
        </h4>
        <h5 className="m-0 mb-[20px] text-secondary font-bold text-[26px] leading-8  max-w-[60%]">
          Phân tích mới nhất
        </h5>

        <div className="flex gap-10 mb-4">
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

        <ul className="list-none">
          {contents.map((content, index) => (
            <li key={index}>
              <div className="flex justify-between pl-0 md:pl-5 py-5 text-base text-secondary gap-10">
                <span>{content.title}</span>
                <span>{content.date}</span>
              </div>
              <div className="bg-divider w-full opacity-25 h-[1px] leading-1"></div>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="faq"
        className="container section-margin"
      >
        <h3 className="text-center mx-auto text-[32px] font-bold leading-10 mb-[50px]">
          FAQs
        </h3>

        <Accordion
          chevron={<IconPlus size="1rem" />}
          styles={{
            chevron: {
              '&[data-rotate]': {
                transform: 'rotate(45deg)',
              },
            },
          }}
          chevronPosition="left"
        >
          <Accordion.Item value="q1">
            <Accordion.Control>
              <h4 className="text-base text-secondary ml-4 md:ml-10">
                Câu 1: CÔNG TY QUẢN LÝ QUỸ VINACAPITAL LÀ CÔNG TY GÌ?
              </h4>
            </Accordion.Control>

            <Accordion.Panel>{generateLoremIpsum(1)}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="q2">
            <Accordion.Control>
              <h4 className="text-base text-secondary ml-4 md:ml-10">
                Câu 2: KHI ĐẦU TƯ VÀO QUỸ MỞ, LỢI NHUẬN CÓ ĐƯỢC ĐẢM BẢO KHÔNG?
              </h4>
            </Accordion.Control>

            <Accordion.Panel>{generateLoremIpsum(1)}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="q3">
            <Accordion.Control>
              <h4 className="text-base text-secondary ml-4 md:ml-10">
                Câu 3: QUỸ MỞ CÓ PHÂN PHỐI LỢI NHUẬN ĐỊNH KỲ KHÔNG?
              </h4>
            </Accordion.Control>

            <Accordion.Panel>{generateLoremIpsum(1)}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </motion.section>
    </>
  );
};

export default HomeInformation;
