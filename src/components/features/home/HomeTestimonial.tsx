import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Popover } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import bgImg from '@/assets/imgs/testimonials/background.svg';
import person1 from '@/assets/imgs/testimonials/person1.jpg';
import person2 from '@/assets/imgs/testimonials/person2.jpg';
import person3 from '@/assets/imgs/testimonials/person3.jpg';
import person4 from '@/assets/imgs/testimonials/person4.png';
import person5 from '@/assets/imgs/testimonials/person5.jpg';
import person6 from '@/assets/imgs/testimonials/person6.jpg';
import person7 from '@/assets/imgs/testimonials/person7.jpg';

import { IconStarFilled, IconQuote } from '@tabler/icons-react';

import { motion } from 'framer-motion';

interface IContent {
  avatar: string;
  content: string;
  rate: number;
  name: string;
  position: string;
}

const TestimonialAvatar = ({
  content,
  size,
}: {
  content: IContent;
  size: number;
}) => {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={'300'} position="top" shadow="md" opened={opened}>
      <Popover.Target>
        <div
          className="rounded-full"
          style={{
            height: size,
            width: size,
          }}
          onMouseEnter={open}
          onMouseLeave={close}
        >
          <img
            src={content.avatar}
            alt=""
            className="w-full h-full object-cover object-center rounded-full"
          />
        </div>
      </Popover.Target>

      <Popover.Dropdown>
        <div className="text-center">
          <IconQuote size={32} className="text-primary" />
          <p className="text-sm text-center italic text-grey">
            {content.content}
          </p>
          <h5 className="text-secondary text-base mt-2 font-semibold text-center">
            {content.name}
          </h5>
          <h6 className="text-sm font-normal">{content.position}</h6>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};

const HomeTestimonial = () => {
  const contents: IContent[] = [
    {
      avatar: person1,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.',
      rate: 5,
      name: 'Tom Raido',
      position: 'IT Manager',
    },
    {
      avatar: person2,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.',
      rate: 4,
      name: 'John Doe',
      position: 'Developer',
    },
    {
      avatar: person3,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.',
      rate: 5,
      name: 'Kate Winslet',
      position: 'Designer',
    },
    {
      avatar: person4,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.',
      rate: 4,
      name: 'Taylor Swift',
      position: 'Singer',
    },
    {
      avatar: person5,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.',
      rate: 4,
      name: 'John Doe',
      position: 'Developer',
    },
    {
      avatar: person6,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.',
      rate: 5,
      name: 'Kate Winslet',
      position: 'Designer',
    },
    {
      avatar: person7,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.',
      rate: 4,
      name: 'Taylor Swift',
      position: 'Singer',
    },
  ];

  return (
    <section className="container mb-52 md:mb-[300px] text-center">
      <motion.h4
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="m-0 mb-[10px] uppercase text-primary font-bold"
      >
        đánh giá
      </motion.h4>
      <motion.h5
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="m-0 mb-[20px] text-secondary font-bold text-[26px] leading-8 w-full md:max-w-[60%] mx-auto"
      >
        Khách hàng nói gì về chúng tôi
      </motion.h5>
      <div className="relative">
        <img
          src={bgImg}
          alt=""
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-[50%] mx-auto mt-16"
        >
          <Swiper
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
            }}
            loop={true}
          >
            {contents.map((content, index) => (
              <SwiperSlide key={index}>
                <img
                  src={content.avatar}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full object-cover object-center"
                />
                <p className="my-[30px]">{content.content}</p>

                <div className="flex justify-center gap-[10px]">
                  {[...Array(content.rate)].map((_, index) => (
                    <IconStarFilled
                      key={index}
                      size={20}
                      className="text-primary"
                    />
                  ))}
                </div>

                <h6 className="text-secondary text-lg mt-2 font-bold text-center">
                  {content.name}
                </h6>
                <p className="text-sm text-center">{content.position}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="absolute top-[2%] right-[8%]"
        >
          <TestimonialAvatar size={90} content={contents[3]} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.32 }}
          className="absolute bottom-[8%] right-0"
        >
          <TestimonialAvatar size={100} content={contents[2]} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="absolute bottom-[-30%] md:bottom-[-50%] right-[20%]"
        >
          <TestimonialAvatar size={100} content={contents[4]} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.48 }}
          className="absolute bottom-[-10%] md:bottom-[-30%] left-[20%]"
        >
          <TestimonialAvatar size={70} content={contents[5]} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.37 }}
          className="absolute bottom-[24%] left-[0]"
        >
          <TestimonialAvatar size={65} content={contents[6]} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62 }}
          className="absolute top-[12%] left-[8%]"
        >
          <TestimonialAvatar size={65} content={contents[1]} />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
