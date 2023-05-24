import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import bgImg from '@/assets/imgs/testimonials/background.svg';
import person1 from '@/assets/imgs/testimonials/person1.jpg';
import person2 from '@/assets/imgs/testimonials/person2.jpg';
import person3 from '@/assets/imgs/testimonials/person3.jpg';
import person4 from '@/assets/imgs/testimonials/person4.jpg';
import person5 from '@/assets/imgs/testimonials/person5.jpg';
import person6 from '@/assets/imgs/testimonials/person6.jpg';
import person7 from '@/assets/imgs/testimonials/person7.jpg';

import { IconStarFilled } from '@tabler/icons-react';

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
  return (
    <div
      className="rounded-full"
      style={{
        height: size,
        width: size,
      }}
    >
      <img
        src={content.avatar}
        alt=""
        className="w-full h-full object-cover object-center rounded-full"
      />
    </div>
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
    <section className="container my-[300px] text-center">
      <h4 className="m-0 mb-[10px] uppercase text-primary font-bold">
        đánh giá
      </h4>
      <h5 className="m-0 mb-[20px] text-secondary font-bold text-[26px] leading-8 max-w-[60%] mx-auto">
        Khách hàng nói gì về chúng tôi
      </h5>
      <div className="relative">
        <img
          src={bgImg}
          alt=""
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
        />

        <div className="max-w-[50%] mx-auto mt-16">
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
        </div>

        <div className="absolute top-[2%] right-[8%]">
          <TestimonialAvatar size={90} content={contents[3]} />
        </div>

        <div className="absolute bottom-[8%] right-0">
          <TestimonialAvatar size={100} content={contents[2]} />
        </div>

        <div className="absolute bottom-[-50%] right-[20%]">
          <TestimonialAvatar size={100} content={contents[4]} />
        </div>

        <div className="absolute bottom-[-30%] left-[20%]">
          <TestimonialAvatar size={70} content={contents[5]} />
        </div>

        <div className="absolute bottom-[24%] left-[0]">
          <TestimonialAvatar size={65} content={contents[6]} />
        </div>

        <div className="absolute top-[12%] left-[8%]">
          <TestimonialAvatar size={65} content={contents[1]} />
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
