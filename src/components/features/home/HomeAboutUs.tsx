import { Swiper, SwiperSlide } from 'swiper/react';

import partner1 from '@/assets/imgs/partner1.png';
import partner2 from '@/assets/imgs/partner2.png';
import partner3 from '@/assets/imgs/partner3.png';
import partner4 from '@/assets/imgs/partner4.png';
import partner5 from '@/assets/imgs/partner5.png';

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

      <div className="container my-[60px]">
        <h6 className="text-primary text-base font-bold mb-7">
          Thành lập năm 2020
        </h6>

        <div className="flex gap-12 items-center">
          <p className="text-xl leading-10 font-bold max-w-[42%]">
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

      <div className="w-full bg-primary py-[50px]">
        <div className="container">
          <h4 className="text-2xl font-bold text-center text-white mb-6">
            Được hơn 40.000 cá nhân và công ty tin cậy
          </h4>

          <Swiper spaceBetween={30} slidesPerView={6} loop autoplay={true}>
            {listPartner.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.img} className="w-fit h-auto" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
