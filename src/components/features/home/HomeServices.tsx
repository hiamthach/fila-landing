import { IconCheck } from '@tabler/icons-react';
import { Button } from '@mantine/core';

import { motion } from 'framer-motion';

const HomeServices = () => {
  return (
    <section
      id="services"
      className="my-36 w-full max-w-[730px] mx-auto text-center px-4 md:px-0 section-margin"
    >
      <motion.h2
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-primary text-white text-[32px] leading-10 py-1 px-4 font-bold w-fit mx-auto"
      >
        Gói dịch vụ
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, translateY: -60 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-secondary text-sm text-center mt-6 mb-12 mx-[60px] font-normal"
      >
        Bắt đầu miễn phí và mở rộng quy mô trong khi bạn phát triển. Không có
        phí ẩn. Không giới hạn người dùng miễn phí.
      </motion.p>

      <div className="flex w-fit flex-col md:flex-row gap-[30px] items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, translateY: -100 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-light py-[26px] px-8 rounded-2xl flex-1 text-left"
        >
          <h4 className="text-secondary text-2xl font-semibold m-0">Premium</h4>
          <p className="text-secondary text-sm font-normal my-4">
            Cung cấp cho người dùng nhiều tính năng hữu ích để giúp họ quản lý
            đầu tư cổ phiếu của mình một cách hiệu quả hơn
          </p>
          <h3 className="text-secondary text-4xl leading-[1.2] m-0">
            229.000đ
            <span className="text-sm font-normal">/tháng</span>
          </h3>

          <div className="w-full h-[1px] bg-secondary my-5"></div>

          <ul className="flex flex-col gap-2 p-0 mb-12">
            {[
              'Không quảng cáo',
              'Xem được toàn bộ giá trị cổ phiếu',
              'Không giới hạn trong ngày',
              'Cập nhật thời gian thực',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-secondary text-sm font-medium"
              >
                <IconCheck size={18} className="mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Button
            fullWidth
            size="md"
            variant="filled"
            style={{
              padding: '16px 0',
              height: 'fit-content',
            }}
          >
            Bắt đầu ngay
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.4, translateY: -100 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex-1 bg-secondary py-[26px] px-8 rounded-2xl text-left text-white"
        >
          <h4 className="text-2xl font-semibold m-0">Vip</h4>
          <p className="text-sm font-normal my-4">
            Mang lại giá trị đáng mong đợi. Sự lựa chọn hoàn hảo cho khách hàng
            muốn sử dụng dịch vụ cao cấp nhất
          </p>

          <h3 className="text-4xl leading-[1.2] m-0">
            599.000đ
            <span className="text-sm font-normal">/tháng</span>
          </h3>

          <div className="w-full h-[1px] bg-[#494949] my-5"></div>

          <ul className="flex flex-col gap-2 p-0 mb-12">
            {[
              'Tất cả ưu đãi ở gói Premium',
              'Thống kê chi tiêu',
              'Thông báo biến động cổ phiếu',
              'Phân tích giá trị đầu tư',
              'Tính toán lợi nhuận',
              'Hỗ trợ khách hàng 24/7',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm font-medium"
              >
                <IconCheck size={18} className="mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Button
            fullWidth
            size="md"
            variant="filled"
            style={{
              padding: '16px 0',
              height: 'fit-content',
            }}
          >
            Bắt đầu ngay
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
