import Image from "next/image";
import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'

export const ProductShowcase = () => {
  return <section className="bg-gradient-to-b from-[#FFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
      <div className="max-w-2xl mx-auto ">
        <div className="flex justify-center">
          <div className="tag">Boost your productivity</div>
        </div>
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter header-gradient mt-5">A more effective way to track prograss</h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes with this template.</p>
        
      </div>
      <div className="relative mt-10">
        <Image className="" src={productImage} alt="product image"></Image>
        <Image height={262} width={262} className='hidden md:block absolute -right-36 -top-32 ' src={pyramidImage} alt="pyramid image"></Image>
        <Image height={248} width={248} className='hidden md:block absolute bottom-24 -left-36' src={tubeImage} alt="pyramid image"></Image>
      </div>
      
    </div>
  </section>;
};
