import { IconTrendingUp, IconArrowUp } from '@tabler/icons-react';

const HomeAnalysis = () => {
  return (
    <section id="analysis" className="section-margin">
      <div className="container text-center">
        <h3 className="text-secondary text-3xl md:text-[32px] leading-10">
          Thông tin nhanh và chính xác
        </h3>
        <p className="text-grey text-sm w-full md:w-3/4 mx-auto mt-[10px]">
          FILA liên tục cập nhật thông tin về chỉ số tài chính, giá cả, tỷ giá
          hối đoái và các thông tin khác cho các sản phẩm tài chính. Nhờ đó,
          người dùng có thể nắm bắt tình hình và ra quyết định đầu tư nhanh
          chóng
        </p>
        <div className="mx-auto mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[46px]">
          <div className="shadow-default pt-4 pb-3 px-4 rounded-[10px]">
            <h6 className="text-secondary text-sm font-bold mb-7">
              Số mã đã khuyến nghị
            </h6>

            <div className="bg-gradient">
              <div className="px-12 py-7">
                <div className="flex gap-5 justify-center">
                  <h4 className="text-[44px] font-bold text-secondary leading-1">
                    452
                  </h4>
                  <div className="text-primary flex flex-col justify-center">
                    <IconTrendingUp />
                    <p className="text-base font-medium m-0">23%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-default pt-4 pb-3 px-4 rounded-[10px]">
            <h6 className="text-secondary text-sm font-bold mb-7">
              Cổ phiếu có lãi
            </h6>

            <div className="bg-gradient">
              <div className="pt-4">
                <div className="flex gap-4 items-center justify-center mb-3">
                  <h4 className="text-[27px] font-bold text-secondary leading-1">
                    6590
                  </h4>
                  <span className="text-[27px] leading-1 mb-1">|</span>
                  <div className="flex items-center">
                    <h4 className="text-[27px] font-semibold text-primary leading-1">
                      0.5%
                    </h4>
                    <IconArrowUp className="text-primary" />
                  </div>
                </div>

                <div className="py-[6px] px-7 bg-white border-primary border-solid rounded-md w-fit mx-auto">
                  Tại quý 3/2022
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-default pt-4 pb-3 px-4 rounded-[10px]">
            <h6 className="text-secondary text-sm font-bold mb-4">
              Mức lãi toàn bộ danh mục
            </h6>

            <div className="mx-auto flex gap-1 text-primary items-center justify-center">
              <h4 className="text-[26px] leading-7 font-bold">34%</h4>
              <IconArrowUp />
            </div>

            <div className="bg-gradient">
              <div className="py-2 px-4">
                <div className="flex items-end gap-2">
                  <span className="text-secondary text-sm font-bold">
                    Cổ phiếu
                  </span>
                  <div className="flex-1 h-[1px] bg-primary -translate-y-1"></div>
                  <div className="text-primary flex gap-[5.6px] justify-center">
                    <p className="text-base font-bold m-0">1.5%</p>
                    <IconTrendingUp />
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-secondary text-sm font-bold">
                    Trái phiếu
                  </span>
                  <div className="flex-1 h-[1px] bg-primary -translate-y-1"></div>
                  <div className="text-primary flex gap-[5.6px] justify-center">
                    <p className="text-base font-bold m-0">2.3%</p>
                    <IconTrendingUp />
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-secondary text-sm font-bold">
                    Quỹ đầu tư
                  </span>
                  <div className="flex-1 h-[1px] bg-primary -translate-y-1"></div>
                  <div className="text-primary flex gap-[5.6px] justify-center">
                    <p className="text-base font-bold m-0">0.8%</p>
                    <IconTrendingUp />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAnalysis;
