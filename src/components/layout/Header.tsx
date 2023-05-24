import helpers from '@/config/helpers/general';

const { scrollToSection } = helpers;

const Header = () => {
  return (
    <header className="h-[60px] w-full flex items-center justify-center sticky top-0 left-0 bg-secondary gap-[50px] z-50">
      {[
        ['Trang chủ', '/'],
        ['Về chúng tôi', '#about'],
        ['Gói dịch vụ', '#services'],
        ['Quan điểm đầu tư', '#investment'],
        ['Thông tin phân tích', '#analysis'],
        ['Miễn trừ trách nhiệm', '/no-responsible'],
      ].map(([label, href]) => (
        <a
          href={href}
          className="text-white font-semibold text-sm no-underline"
          onClick={scrollToSection}
        >
          {label}
        </a>
      ))}
    </header>
  );
};

export default Header;
