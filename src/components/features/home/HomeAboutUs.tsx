import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CountUp from 'react-countup';

import partner1 from '@/assets/imgs/partner1.png';
import partner2 from '@/assets/imgs/partner2.png';
import partner3 from '@/assets/imgs/partner3.png';
import partner4 from '@/assets/imgs/partner4.png';
import partner5 from '@/assets/imgs/partner5.png';

import globeVector from '@/assets/imgs/globe-vector.svg';
import mapBg from '@/assets/imgs/map-bg.svg';

import helpers from '@/config/helpers/general';

const { generateImgPicsum } = helpers;

const listPartner = [
  {
    img: partner1,
  },
  {
    img: partner2,
  },
  {
    img: partner3,
  },
  {
    img: partner4,
  },
  {
    img: partner5,
  },
  {
    img: partner1,
  },
  {
    img: partner2,
  },
  {
    img: partner3,
  },
  {
    img: partner4,
  },
  {
    img: partner5,
  },
  {
    img: partner1,
  },
  {
    img: partner2,
  },
  {
    img: partner3,
  },
  {
    img: partner4,
  },
  {
    img: partner5,
  },
];

const HomeAboutUs = () => {
  return (
    <section id="about">
      <div className="w-full bg-primary py-4">
        <div className="container">
          <h2 className="text-white text-[32px] leading-10 font-bold">
            Về chúng tôi
          </h2>
        </div>
      </div>

      <div className="container my-8 md:my-[60px]">
        <h6 className="text-primary text-base font-bold mb-4 md:mb-7">
          Thành lập năm 2020
        </h6>

        <div className="flex gap-8 md:gap-12 items-center flex-col md:flex-row">
          <p className="text-xl leading-10 font-bold w-full md:max-w-[42%]">
            Với tư cách là nhà quản lý đầu tư đa lĩnh vực duy nhất của Việt Nam,
            chúng tôi có vị thế đặc biệt để tạo giá trị và chia sẻ các cơ hội và
            lợi ích từ sự phát triển của đất nước trên các loại tài sản.
          </p>

          <p className="text-text-body text-sm flex-1">
            Sứ mệnh của VinaCapital là giúp nhà đầu tư khám phá các cơ hội đầu
            tư tốt nhất tại Việt Nam bằng cách tận dụng các mối quan hệ sâu
            rộng, kiến thức đầu tư, khả năng phân tích và chuyên môn tài chính
            của mình.
            <br />
            <br />
            Các chuyên gia của chúng tôi có kinh nghiệm đầu tư bài bản về các
            loại tài sản truyền thống và thay thế, bao gồm cổ phiếu, tài sản có
            thu nhập cố định, cổ phần tư nhân, công nghệ, bất động sản và năng
            lượng sạch.
          </p>
        </div>
      </div>

      <div className="w-full bg-primary py-[50px] section-margin">
        <div className="container">
          <h4 className="text-xl md:text-2xl font-bold text-center text-white mb-6">
            Được hơn 40.000 cá nhân và công ty tin cậy
          </h4>

          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              300: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
          >
            {listPartner.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.img} className="w-fit h-auto" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="container section-margin">
        <h4 className="m-0 mb-[10px] uppercase text-primary font-bold">
          tại sao chọn chúng tôi
        </h4>
        <h5 className="m-0 mb-[30px] text-secondary font-bold text-[26px] leading-8 w-full md:max-w-[60%]">
          Hơn 50 triệu khách hàng đã hài lòng về chúng tôi
        </h5>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="flex gap-5 items-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center bg-[#ACE2EB] rounded-[20px]">
                <img src={globeVector} alt="" className="w-12 h-auto mt-1" />
              </div>
              <div className="flex-1">
                <h6 className="m-0 text-secondary text-base font-semibold">
                  Hỗ trợ khách hàng toàn cầu
                </h6>
                <p className="m-0 text-secondary text-sm font-normal mt-2">
                  Lorem ipsum dolor sit amet consectetur. Augue vestibulum massa
                  aliquam egestas lorem sem.
                </p>
              </div>
            </div>
            <div className="w-full bg-divider h-[1px] opacity-25 my-4 "></div>
            <div className="flex gap-5 items-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center bg-[#ACE2EB] rounded-[20px]">
                <img src={globeVector} alt="" className="w-12 h-auto mt-1" />
              </div>
              <div className="flex-1">
                <h6 className="m-0 text-secondary text-base font-semibold">
                  Hơn 300 nhân viên có kinh nghiệm cao
                </h6>
                <p className="m-0 text-secondary text-sm font-normal mt-2">
                  Lorem ipsum dolor sit amet consectetur. Augue vestibulum massa
                  aliquam egestas lorem sem.
                </p>
              </div>
            </div>
            <div className="w-full bg-divider h-[1px] opacity-25 my-4 "></div>
            <div className="flex gap-5 items-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center bg-[#ACE2EB] rounded-[20px]">
                <img src={globeVector} alt="" className="w-12 h-auto mt-1" />
              </div>
              <div className="flex-1">
                <h6 className="m-0 text-secondary text-base font-semibold">
                  Hơn 300 nhân viên có kinh nghiệm cao
                </h6>
                <p className="m-0 text-secondary text-sm font-normal mt-2">
                  Lorem ipsum dolor sit amet consectetur. Augue vestibulum massa
                  aliquam egestas lorem sem.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex-1 flex items-center justify-center min-h-[360px]">
            <div className="bg-white px-9 py-12 w-fit h-fit text-center shadow-default z-30 rounded-[5px]">
              <h4 className="text-primary text-8xl font-extrabold m-0 mb-3">
                <CountUp start={0} end={12} duration={8} />
              </h4>
              <p className="text-secondary text-[11px] font-semibold m-0">
                Year's experience working
              </p>
            </div>

            <img
              src={mapBg}
              alt=""
              className="z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            <img
              src={generateImgPicsum(84, 63)}
              alt=""
              className="w-[84px] h-[63px] object-cover object-center z-10 right-[16%] top-0 absolute rounded-md"
            />

            <img
              src={generateImgPicsum(152, 101)}
              alt=""
              className="w-[152px] h-[101px] object-cover object-center z-10 left-[12%] top-[6%] absolute rounded-md"
            />

            <img
              src={generateImgPicsum(136, 92)}
              alt=""
              className="w-[136px] h-[92px] object-cover object-center z-10 left-[4%] bottom-[6%] absolute rounded-md"
            />

            <img
              src={generateImgPicsum(136, 92)}
              alt=""
              className="w-[136px] h-[92px] object-cover object-center z-10 right-[10%] top-[46%] absolute rounded-md"
            />

            <img
              src={generateImgPicsum(127, 84)}
              alt=""
              className="w-[127px] h-[84px] object-cover object-center left-[42%] bottom-0 absolute rounded-md z-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
