import React from 'react';
import Bg from '../public/bg.webp'
const Hero = () => {
  return (
    <div className='text-white bg-hero-bg'>
      <div className='max-w-[850px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          WEBSITE BÁN TÀI KHOẢN BẢN QUYỀN TOP 1 VIỆT NAM
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Space0.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Uy tín, nhanh chóng và bảo mật trong từng giao dịch
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Nếu bạn cần một nơi có thể cung cấp giải pháp mua bán trao đổi tài khoản Online? Hãy đến Space0.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Mua Ngay</button>
      </div>
    </div>
  );
};

export default Hero;
