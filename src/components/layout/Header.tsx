import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Burger, Drawer } from '@mantine/core';

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <header className="h-[60px] w-full sticky top-0 left-0 bg-secondary z-[100]">
      <div className="hidden items-center justify-center gap-[50px] w-full h-full lg:flex">
        {[
          ['Trang chủ', '/'],
          ['Về chúng tôi', '/#about'],
          ['Gói dịch vụ', '/#services'],
          ['Quan điểm đầu tư', '/#investment'],
          ['Thông tin phân tích', '/#analysis'],
          ['Miễn trừ trách nhiệm', 'no-responsible'],
        ].map(([label, href]) => (
          <Link
            to={href}
            className="text-white font-semibold text-sm no-underline"
            key={href}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="flex lg:hidden justify-end items-center w-full h-full pr-6">
        <Burger
          opened={opened}
          onClick={open}
          className="text-white"
          color="white"
        />
      </div>

      <Drawer
        opened={opened}
        onClose={close}
        size={'fit-content'}
        transitionProps={{
          transition: 'rotate-left',
          duration: 150,
          timingFunction: 'linear',
        }}
      >
        <div className="flex flex-col gap-4 px-4">
          {[
            ['Trang chủ', '/'],
            ['Về chúng tôi', '/#about'],
            ['Gói dịch vụ', '/#services'],
            ['Quan điểm đầu tư', '/#investment'],
            ['Thông tin phân tích', '/#analysis'],
            ['Miễn trừ trách nhiệm', 'no-responsible'],
          ].map(([label, href]) => (
            <Link
              to={href}
              className="text-secondary font-semibold text-sm no-underline"
              key={href}
              onClick={close}
            >
              {label}
            </Link>
          ))}
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
