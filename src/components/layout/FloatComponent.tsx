import { useState } from 'react';

import messageIcon from '@/assets/icons/message-icons.svg';
import qrIcon from '@/assets/icons/qr.svg';
import { IconDownload, IconX } from '@tabler/icons-react';

const FloatComponent = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="flex flex-col gap-5 items-end">
      {isShow && (
        <div className="relative border-1 border-solid border-primary rounded-[10px] px-5 pt-3 pb-5 bg-white">
          <h5 className="text-lg m-0 italic font-bold">Tải ngay FiLA</h5>
          <div className="w-full h-[3px] bg-primary rounded mb-[30px]"></div>
          <div className="flex gap-5 items-center">
            <img src={qrIcon} alt="" className="w-[64px] aspect-square" />

            <IconDownload size={36} className="text-secondary" />
          </div>
          <div
            className="absolute right-1 top-1 cursor-pointer"
            onClick={() => {
              setIsShow(false);
            }}
          >
            <IconX size={18} />
          </div>
        </div>
      )}
      <div className="hover:shadow-default cursor-pointer aspect-square w-12 md:w-16 bg-primary flex items-center justify-center rounded-full">
        <img src={messageIcon} alt="message" className="w-6 md:w-8 h-auto" />
      </div>
    </div>
  );
};

export default FloatComponent;
