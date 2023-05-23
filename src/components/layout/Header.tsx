const Header = () => {
  return (
    <div className="h-[60px] w-full flex items-center justify-center sticky top-0 left-0 bg-secondary gap-[50px]">
      {[
        ['Trang chủ', '/'],
        ['Về chúng tôi', '#about'],
        ['Gói dịch vụ', '#services'],
        ['Quan điểm đầu tư', '#investment'],
        ['Thông tin phân tích', '#analysis'],
        ['Miễn trừ trách nhiệm', '/no-responsible'],
      ].map(([label, href]) => (
        <a href={href} className="text-white font-semibold text-sm">
          {label}
        </a>
      ))}
    </div>
  );
};

export default Header;
