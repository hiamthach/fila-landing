import { IconCheck } from '@tabler/icons-react';
import { Button } from '@mantine/core';

const HomeServices = () => {
  return (
    <section
      id="services"
      className="my-36 w-full max-w-[730px] mx-auto text-center px-4 md:px-0 section-margin"
    >
      <h2 className="bg-primary text-white text-[32px] leading-10 py-1 px-4 font-bold w-fit mx-auto">
        Gói dịch vụ
      </h2>
      <p className="text-secondary text-sm text-center mt-6 mb-12 mx-[60px] font-normal">
        Bắt đầu miễn phí và mở rộng quy mô trong khi bạn phát triển. Không có
        phí ẩn. Không giới hạn người dùng miễn phí.
      </p>

      <div className="flex w-fit flex-col md:flex-row gap-[30px] items-center">
        <div className="bg-light py-[26px] px-8 rounded-2xl flex-1 text-left">
          <h4 className="text-secondary text-2xl font-semibold m-0">Premium</h4>
          <p className="text-secondary text-sm font-normal my-4">
            Keep track of your contacts, gain valuable insights, analyse live
            data and performance metrics.
          </p>
          <h3 className="text-secondary text-4xl leading-[1.2] m-0">
            Free
            <span className="text-sm font-normal">
              * No credit card required
            </span>
          </h3>

          <div className="w-full h-[1px] bg-secondary my-5"></div>

          <ul className="flex flex-col gap-2 p-0 mb-12">
            {[
              'Real-time monitoring',
              'Track key performance indicators',
              'Schedule appointments',
              'Organize, delegate and keep track of tasks',
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
            Get started
          </Button>
        </div>
        <div className="flex-1 bg-secondary py-[26px] px-8 rounded-2xl text-left text-white">
          <h4 className="text-2xl font-semibold m-0">Vip</h4>
          <p className="text-sm font-normal my-4">
            Keep track of your contacts, gain valuable insights, analyse live
            data and performance metrics.
          </p>

          <h3 className="text-4xl leading-[1.2] m-0">
            $49
            <span className="text-sm font-normal">/month</span>
          </h3>

          <div className="w-full h-[1px] bg-[#494949] my-5"></div>

          <ul className="flex flex-col gap-2 p-0 mb-12">
            {[
              'Everything from the PREMIUM plan plus',
              'Data-driven decisions',
              'Data visualisation',
              'Schedule appointments',
              'Store and organise contact information',
              'Teal-time communication tools for messaging and video conferencing',
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
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
