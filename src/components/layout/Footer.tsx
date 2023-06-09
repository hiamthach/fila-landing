import Logo from '../shared/Logo';

import { IconClock, IconSend } from '@tabler/icons-react';

import footerPhone from '@/assets/imgs/footer-phone.svg';
import footerEmail from '@/assets/imgs/footer-email.svg';
import footerLocation from '@/assets/imgs/footer-location.svg';

import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';

const Footer = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      problem: '',
    },
  });

  return (
    <footer
      id="footer"
      className="w-full py-7 bg-footer bg-no-repeat bg-center bg-cover text-white"
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row w-full gap-10">
          <div className="w-full sm:w-fit sm:max-w-[27%] h-full sm:min-h-[325px] flex flex-col">
            <Logo />
            <p className="text-sm mt-4 sm:mt-9">
              Đồng hành cùng bạn trên con đường đầu tư cổ phiếu thành công
            </p>

            <div className="mt-4 sm:mt-auto flex gap-2 text-sm font-medium justify-self-end mb-2">
              <IconClock size={20} className="text-primary" />
              <span>T2-T7</span>
              <span>10.00am-6.00pm</span>
            </div>
          </div>

          <div className="w-fit">
            <h4 className="m-0 text-lg">Về chúng tôi</h4>

            <ul className="mt-4 sm:mt-9 flex flex-col gap-2 sm:gap-5 list-none p-0">
              {[
                ['Trang chủ', '/'],
                ['Về chúng tôi', '/#about'],
                ['Gói dịch vụ', '/#services'],
                ['Quan điểm đầu tư', '/#investment'],
                ['Thông tin phân tích', '/#analysis'],
                ['Miễn trừ trách nhiệm', 'no-responsible'],
              ].map(([label, href]) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="text-xs">◆</span>
                  <Link className="text-white no-underline text-base" to={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 pl-0 sm:pl-5">
            <h4 className="m-0 text-lg">Yêu cầu tư vấn</h4>

            <form
              name="contact"
              className="mt-9 flex flex-col gap-[10px]"
              onSubmit={form.onSubmit((values) => console.log(values))}
            >
              <input
                type="text"
                className="font-medium font-sans text-sm leading-6 bg-transparent border-[#f3f3f3] text-[#6F6F6F] outline-none border-solid text w-full px-3 py-2"
                placeholder="Tên của bạn"
                {...form.getInputProps('name')}
              />
              <input
                type="text"
                className="font-medium font-sans text-sm leading-6 bg-transparent border-[#f3f3f3] text-[#6F6F6F] outline-none border-solid text w-full px-3 py-2"
                placeholder="Vấn đề muốn tư vấn"
                {...form.getInputProps('problem')}
              />
              <input
                type="email"
                className="font-medium font-sans text-sm leading-6 bg-transparent border-[#f3f3f3] text-[#6F6F6F] outline-none border-solid text w-full px-3 py-2"
                placeholder="Email của bạn"
                {...form.getInputProps('email')}
              />
              <input
                type="tel"
                className="font-medium font-sans text-sm leading-6 bg-transparent border-[#f3f3f3] text-[#6F6F6F] outline-none border-solid text w-full px-3 py-2"
                placeholder="Số điện thoại của bạn"
                {...form.getInputProps('phone')}
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
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-5 lg:gap-[50px]">
          <div className="bg-[#134952] py-2 lg:py-3 px-2 lg:px-5 flex gap-2 md:gap-5">
            <img src={footerPhone} alt="phone" className="w-12 aspect-square" />
            <div className="flex flex-col justify-center py-1">
              <h6 className="text-white text-sm font-normal m-0">
                Điện thoại tư vấn
              </h6>
              <span className="text-sm font-semibold">+880 123 456 789</span>
            </div>
          </div>
          <div className="bg-[#134952] py-2 lg:py-3 px-2 lg:px-5 flex gap-2 md:gap-5">
            <img src={footerEmail} alt="email" className="w-12 aspect-square" />
            <div className="flex flex-col justify-center py-1">
              <h6 className="text-white text-sm font-normal m-0">
                Địa chỉ Email
              </h6>
              <span className="text-sm font-semibold">
                Infoyourcp@gmail.com
              </span>
            </div>
          </div>
          <div className="bg-[#134952] py-2 lg:py-3 px-2 lg:px-5 flex gap-2 md:gap-5">
            <img
              src={footerLocation}
              alt="location"
              className="w-12 aspect-square"
            />
            <div className="flex flex-col justify-center py-1">
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
