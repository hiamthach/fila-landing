import { useState } from 'react';
import { clsx, Accordion } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

import { motion } from 'framer-motion';

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
      title: 'Không có “Rủi ro ngân hàng thung lũng Silicon” tại Việt Nam',
      date: '21/05/2023',
    },
    {
      title: 'VN-Index khởi đầu năm 2023 thuận lợi',
      date: '21/05/2023',
    },
    {
      title:
        'Trung Quốc mở cửa trở lại sẽ thúc đẩy nhẹ tăng trưởng GDP của Việt Nam trong năm 2023',
      date: '21/05/2023',
    },
    {
      title: 'Hướng đến 2023',
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

            <Accordion.Panel>
              <div className="text-secondary text-sm flex flex-col gap-4 font-medium">
                <p>
                  Là công ty QLQ có tư cách pháp nhân độc lập, do UBCKNN cấp
                  phép thành lập & hoạt động để quản lý các quỹ đầu tư chứng
                  khoán cho NĐT trong nước và quốc tế.
                </p>
                <ul className="ml-5">
                  <li>
                    <p>
                      Công ty QLQ hoạt động kinh doanh trên TTCK và chịu sự quản
                      lý của UBCKNN
                    </p>
                  </li>
                  <li>
                    <p>Hoạt động kinh doanh của công ty QLQ VinaCapital</p>
                    <ul className="ml-4 mt-1">
                      <li>
                        <p>Thành lập và quản lý quỹ đầu tư chứng khoán</p>
                      </li>
                      <li>
                        <p>Dịch vụ quản lý danh mục đầu tư chứng khoán</p>
                      </li>
                      <li>
                        <p>Tư vấn đầu tư chứng khoán</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="q2">
            <Accordion.Control>
              <h4 className="text-base text-secondary ml-4 md:ml-10">
                Câu 2: KHI ĐẦU TƯ VÀO QUỸ MỞ, LỢI NHUẬN CÓ ĐƯỢC ĐẢM BẢO KHÔNG?
              </h4>
            </Accordion.Control>

            <Accordion.Panel>
              <div className="text-secondary text-sm font-medium">
                <ul className="ml-5 flex flex-col gap-4">
                  <li>
                    <p>
                      Theo quy định của pháp luật thì công ty QLQ không được cam
                      kết lợi nhuận đầu tư đối với Quỹ mở. Tuy nhiên NĐT sẽ được
                      hưởng toàn bộ lợi nhuận đầu tư của quỹ sau khi trừ chi
                      phí. Các loại phí của Quỹ mở rất nhỏ và giảm dần theo thời
                      gian.
                    </p>
                  </li>
                  <li>
                    <p>
                      Theo quy định tại Khoản 4 Điều 22, Thông Tư 98/2020/TT-BTC
                      về “hướng dẫn hoạt động và quản lý quỹ đầu tư chứng khoán”
                      do Bộ Tài chính ban hành thì công ty QLQ không được bao
                      hàm các nhận định khiến NĐT hiểu nhầm là giá trị khoản đầu
                      tư luôn luôn gia tăng, cam kết hoặc dự báo về kết quả đầu
                      tư trong tương lai của quỹ.
                    </p>
                  </li>
                  <li>
                    <p>
                      Lịch sử hoạt động của Quỹ mở tại Việt Nam đến nay cho thấy
                      NĐT đang đạt được lợi nhuận cao trong trung & dài hạn so
                      với các kênh truyền thống khác.
                    </p>
                  </li>
                  <li>
                    <p>
                      Khách hàng đầu tư vào Quỹ mở do VinaCapital quản lý có tài
                      khoản online VinaCapital MiO có thể theo dõi kết quả đầu
                      tư của mình mọi lúc mọi nơi và có thể chốt lời/cắt lỗ ở
                      mức mà mình mong muốn.
                    </p>
                  </li>
                </ul>
              </div>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="q3">
            <Accordion.Control>
              <h4 className="text-base text-secondary ml-4 md:ml-10">
                Câu 3: QUỸ MỞ CÓ PHÂN PHỐI LỢI NHUẬN ĐỊNH KỲ KHÔNG?
              </h4>
            </Accordion.Control>

            <Accordion.Panel>
              <div className="text-secondary text-sm font-medium">
                <ul className="ml-5 flex flex-col gap-4">
                  <li>
                    <p>
                      Quỹ mở không phân phối lợi nhuận định kỳ cho NĐT, tuy
                      nhiên toàn bộ lợi nhuận tạo ra của quỹ đã được bao gồm
                      trong giá CCQ làm cho giá CCQ tăng lên.
                    </p>
                  </li>
                  <li>
                    <p>
                      NĐT sẽ nhận được toàn bộ lợi nhuận đầu tư khi bán CCQ để
                      rút tiền về.
                    </p>
                  </li>
                </ul>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </motion.section>
    </>
  );
};

export default HomeInformation;
