'use client'

import Image from 'next/image';
import { useState } from 'react';
import { BsWechat } from "react-icons/bs";

const WechatModal = ({ className }: { className?: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        aria-label="wechat"
        className={`flex max-w-[24px] flex-col items-center justify-center ${className}`}
      >
        <BsWechat className="text-lg" />
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-md mx-4 bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
            <div className="p-4">
              <Image
                src="/images/gallery/WechatIMG2.jpg"
                alt="微信二维码"
                width={400}
                height={400}
                className="w-full h-auto rounded"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WechatModal; 