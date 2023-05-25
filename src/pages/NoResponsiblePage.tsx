import { useEffect } from 'react';

import { clsx, Breadcrumbs, Anchor } from '@mantine/core';

import { useLocation, useNavigationType } from 'react-router-dom';

const items = [
  { title: 'Trang chủ', href: '/' },
  { title: 'Công bố rủi ro', href: '#' },
].map((item, index) => (
  <Anchor
    href={item.href}
    key={index}
    className={clsx('text-sm font-semibold', index == 0 && 'text-grey')}
  >
    {item.title}
  </Anchor>
));

const content1 = [
  'Công ty Liên doanh Quản lý Quỹ đầu tư Chứng khoán Vietcombank (VCBF) xin chào mừng và trân trọng cảm ơn quý Nhà đầu tư đã sử dụng các Dịch Vụ Giao Dịch Trực Tuyến của chúng tôi.',
  'VCBF có thể, tùy theo sự suy xét của chính mình hoặc tùy từng thời điểm, sửa đổi và bổ sung hoặc thay thế một phần nào đó của Bản Công Bố Rủi Ro Dịch Vụ Giao Dịch Trực Tuyến (sau đây có thể gọi tắt là Bản Công Bố Rủi Ro). Bản Công Bố Rủi Ro sẽ có hiệu lực lập tức khi công bố trên website của VCBF.',
  'Nhà đầu tư tham gia sử dụng các Dịch Vụ Giao Dịch Trực Tuyến do VCBF cung cấp tùy từng thời điểm được yêu cầu phải đọc kỹ, hiểu rõ và chấp nhận các nội dung, rủi ro phát sinh từ các Dịch Vụ Giao Dịch Trực Tuyến được nêu tại Bản Công Bố Rủi Ro này, cụ thể như sau:',
];

const content2 = [
  'Khi thực hiện Dịch Vụ Giao dịch Trực tuyến, Nhà đầu tư thừa nhận rằng việc thực hiện các Dịch Vụ Giao Dịch Trực Tuyến luôn tồn tại những rủi ro tiềm tàng và cam kết chấp nhận mọi rủi ro, mất mát hoặc thiệt hại do những rủi ro tiềm tàng gây ra. Những rủi ro tiềm tàng của các Dịch Vụ Giao Dịch Trực Tuyến bao gồm nhưng không giới hạn các nội dung sau:',
  '1. Hệ thống máy tính, hệ thống Giao dịch Trực tuyến, điện thoại của Nhà đầu tư bị hỏng, bị Virus, bị tấn công dẫn đến việc làm lộ hoặc bị đánh cắp các thông tin về giao dịch của Nhà đầu tư hoặc tài khoản của Nhà đầu tư bị sử dụng một cách trái phép bởi một bên thứ ba.',
  '2. Những sự cố liên quan đến đường truyền Internet do nhà cung cấp dịch vụ gây ra như: đứt đường truyền, dung lượng đường truyền bị hạn chế hoặc những sự cố tương tự có thể ảnh hưởng đến việc thực hiện các Giao dịch Trực tuyến của Nhà đầu tư như Giao dịch Trực tuyến của Nhà đầu tư không thể truyền đến hệ thống của VCBF (lệnh giao dịch của Nhà đầu tư có thể bị treo/ngừng/trì hoãn hoặc có lỗi dữ liệu), Nhà đầu tư không thể truy cập vào hệ thống của VCBF…',
  '3. Thông tin về giá cả thị trường và các thông tin có liên quan đến Giao dịch Trực tuyến có thể có lỗi/sai, lệch hoặc việc nhận dạng Nhà đầu tư có thể không chính xác do những sự cố ngoài ý muốn.',
  '4. Hệ thống máy tính, hệ thống Giao dịch Trực tuyến, hệ thống điện thoại không hoạt động hoặc hoạt động không đúng chức năng do gặp sự cố bị mất nguồn điện, bị tấn công, nhiễm virus hoặc bị ảnh hưởng của những sự cố ngoài khả năng kiểm soát dẫn đến việc không thể xử lý hoặc thực hiện các giao dịch trực tuyến của Nhà đầu tư.',
  '5. Giao Dịch Trực Tuyến do Nhà đầu tư thực hiện sẽ được xử lý và thực hiện một cách tự động hoặc mặc nhiên ngay khi truyền đến hệ thống của VCBF nên lệnh giao dịch đã được Nhà đầu tư gửi đi không thể thu hồi và có thể tạo ra cho Nhà đầu tư một nghĩa vụ thanh toán ngay lập tức.',
  '6. Những rủi ro kỹ thuật có thể xảy ra trong quá trình xác thực đặt lệnh cho Nhà đầu tư.',
];

const content3 = [
  '1. Trừ trường hợp do lỗi chủ quan của VCBF, VCBF xác nhận mọi Giao dịch Trực tuyến của Nhà đầu tư gửi đến VCBF đều là đúng và do chính Nhà đầu tư thực hiện. Vì vậy, mọi ý kiến cho rằng đó là nhầm lẫn hoặc sai sót liên quan đến giao dịch của Nhà đầu tư đều không được chấp nhận. Do đó, VCBF sẽ không chịu trách nhiệm đối với mọi thiệt hại phát sinh từ các giao dịch của Nhà đầu tư thực hiện tại VCBF.',
  '2. Nhà đầu tư chịu trách nhiệm bảo mật và không được để người khác chiếm hữu hoặc điều khiển các thông tin liên quan nhằm phục vụ cho Dịch Vụ Giao Dịch Trực Tuyến. VCBF sẽ không chịu trách nhiệm đối với các khiếu nại, tổn thất và hậu quả phát sinh từ hoặc liên quan tới tất cả các Giao Dịch Trực Tuyến được tiến hành phát sinh do lỗi của Nhà đầu tư liên quan đến việc bảo mật các thông tin.',
  '3. VCBF không chịu trách nhiệm đối với bất kỳ sai sót hoặc thiệt hại phát sinh do Nhà đầu tư cung cấp thông tin chậm trễ, thiếu sót hay không chính xác dẫn đến không sử dụng được Dịch Vụ Giao Dịch Trực Tuyến.',
  '4. VCBF không chịu trách nhiệm đối với bất kỳ sai sót hoặc thiệt hại phát sinh do có sự trục trặc về máy móc, xử lý dữ liệu, thông tin viễn thông, xảy ra sự kiện bất khả kháng hoặc bất kỳ sự việc nào ngoài khả năng kiểm soát của VCBF hoặc do hậu quả của sự gian lận, giả mạo, lỗi của bất kỳ bên thứ ba nào, bao gồm những đối tác và/hoặc bên cung cấp dịch vụ của VCBF trong việc cung cấp Dịch Vụ Giao Dịch Trực Tuyến.',
];

const NoResponsiblePage = () => {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== 'POP') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [location, navType]);

  return (
    <div className="w-full h-full bg-no-responsible bg-cover bg-no-repeat">
      <div className="pt-[120px] pb-10 px-5 w-full max-w-[1100px] mx-auto">
        <Breadcrumbs separator=">">{items}</Breadcrumbs>

        <div className="my-5 md:mt-[50px]">
          <div className="text-center w-fit mx-auto">
            <h1 className="uppercase text-[32px] leading-10 mb">
              miễn trừ trách nhiệm
            </h1>
            <div className="w-20 h-[3px] bg-primary mx-auto"></div>

            <h3 className="mt-5 mb-4 font-semibold text-base">
              BẢN MIỄN TRỪ TRÁCH NHIỆM DỊCH VỤ GIAO DỊCH TRỰC TUYẾN
            </h3>
            <span className="font-normal text-sm">
              (Khi sử dụng Dịch vụ Giao dịch Trực tuyến của Công ty Liên Doanh
              Quản lý Quỹ Đầu tư chứng khoán Vietcombank)
            </span>
          </div>

          <section className="flex flex-col gap-3 mt-5">
            {content1.map((item, index) => (
              <p className="text-sm leading-6 font-medium" key={index}>
                {item}
              </p>
            ))}
          </section>
          <section className="flex flex-col gap-3 mt-5">
            <h6 className="text-primary text-sm leading-6">I. RỦI RO</h6>
            {content2.map((item, index) => (
              <p className="text-sm leading-6 font-medium" key={index}>
                {item}
              </p>
            ))}
          </section>
          <section className="flex flex-col gap-3 mt-5">
            <h6 className="text-primary text-sm leading-6">
              II. MIỄN TRỪ TRÁCH NHIỆM
            </h6>
            {content3.map((item, index) => (
              <p className="text-sm leading-6 font-medium" key={index}>
                {item}
              </p>
            ))}
          </section>
          <section className="flex flex-col gap-3 mt-5">
            <h6 className="text-primary text-sm leading-6">
              III. CAM KẾT CỦA VCBF
            </h6>

            <p className="text-sm leading-6 font-medium">
              VCBF cam kết mang lại cho Nhà đầu tư dịch vụ tốt nhất và giảm
              thiểu các rủi ro có thể gặp phải về kỹ thuật.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NoResponsiblePage;
