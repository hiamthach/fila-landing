import Logo from '../shared/Logo';

import { IconClock, IconSend } from '@tabler/icons-react';

import footerPhone from '@/assets/imgs/footer-phone.svg';
import footerEmail from '@/assets/imgs/footer-email.svg';
import footerLocation from '@/assets/imgs/footer-location.svg';

import helpers from '@/config/helpers/general';

const { scrollToSection } = helpers;

const Footer = () => {
  return (
    <footer className="w-full py-7 bg-footer text-white">
      <div className="container">
        <div className="flex flex-row w-full gap-10 items-stretch justify-stretch">
          <div className="w-fit max-w-[27%] h-full self-stretch min-h-[325px] flex flex-col">
            <Logo />
            <p className="text-sm mt-9">
              Lorem ipsum dolor sit amet consectetur. Purus tincidunt viverra
              est adipiscing tortor nunc ipsum ut fusce.
            </p>

            <div className="mt-auto flex gap-2 text-sm font-medium justify-self-end mb-2">
              <IconClock size={20} className="text-primary" />
              <span>Mon-Sat</span>
              <span>10.00am-6.00pm</span>
            </div>
          </div>
          <div className="w-fit">
            <h4 className="m-0 text-lg">Về chúng tôi</h4>

            <ul className="mt-9 flex flex-col gap-5 list-none p-0">
              {[
                ['Trang chủ', '/'],
                ['Về chúng tôi', '#about'],
                ['Gói dịch vụ', '#services'],
                ['Quan điểm đầu tư', '#investment'],
                ['Thông tin & phân tích', '#analysis'],
                ['Miễn trừ trách nhiệm', '/no-responsible'],
              ].map(([label, href]) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="text-xs">◆</span>
                  <a
                    className="text-white no-underline text-base"
                    href={href}
                    onClick={scrollToSection}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 pl-5">
            <h4 className="m-0 text-lg">Yêu cầu tư vấn</h4>

            <form name="contact" className="mt-9 flex flex-col gap-[10px]">
              <input
                type="text"
                className="font-medium font-sans text-sm leading-6 bg-transparent border-[#f3f3f3] text-[#6F6F6F] outline-none border-solid text w-full px-3 py-2"
                placeholder="Tên của bạn"
              />
              <input
                type="text"
                className="font-medium font-sans text-sm leading-6 bg-transparent border-[#f3f3f3] text-[#6F6F6F] outline-none border-solid text w-full px-3 py-2"
                placeholder="Vấn đề muốn tư vấn"
              />
              <input
                type="email"
                className="font-medium font-sans text-sm leading-6 bg-transparent border-[#f3f3f3] text-[#6F6F6F] outline-none border-solid text w-full px-3 py-2"
                placeholder="Email của bạn"
              />
              <input
                type="tel"
                className="font-medium font-sans text-sm leading-6 bg-transparent border-[#f3f3f3] text-[#6F6F6F] outline-none border-solid text w-full px-3 py-2"
                placeholder="Số điện thoại của bạn"
              />

              <button
                type="submit"
                className="flex justify-center gap-3 bg-primary text-white w-full py-3 items-center outline-none border-none"
              >
                <IconSend />
                <span>Gửi yêu cầu</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="my-[30px] bg-divider w-full h-[1px] opacity-25"></div>

      <div className="container">
        <div className="flex w-full gap-[50px]">
          <div className="bg-[#134952] py-3 px-5 flex gap-5 flex-1">
            <img src={footerPhone} alt="phone" className="w-12 aspect-square" />
            <div className="flex flex-col justify-between py-1">
              <h6 className="text-white text-sm font-normal m-0">
                Điện thoại tư vấn
              </h6>
              <span className="text-sm font-semibold">+880 123 456 789</span>
            </div>
          </div>
          <div className="bg-[#134952] py-3 px-5 flex gap-5 flex-1">
            <img src={footerEmail} alt="email" className="w-12 aspect-square" />
            <div className="flex flex-col justify-between py-1">
              <h6 className="text-white text-sm font-normal m-0">
                Địa chỉ Email
              </h6>
              <span className="text-sm font-semibold">
                Infoyourcp@gmail.com
              </span>
            </div>
          </div>
          <div className="bg-[#134952] py-3 px-5 flex gap-5 flex-1">
            <img
              src={footerLocation}
              alt="location"
              className="w-12 aspect-square"
            />
            <div className="flex flex-col justify-between py-1">
              <h6 className="text-white text-sm font-normal m-0">Địa điểm</h6>
              <span className="text-sm font-semibold">
                Binh Thanh, HCM City
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
