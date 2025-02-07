import acmeLogo from '@/assets/logo-acme.png'
import quantumLogo from '@/assets/logo-quantum.png'
import echoLogo from '@/assets/logo-echo.png'
import celestialLogo from '@/assets/logo-celestial.png'
import pulseLogo from '@/assets/logo-pulse.png'
import apexLogo from '@/assets/logo-apex.png'
import Image from 'next/image'
export const LogoTicker = () => {
  return <div className='py-8 bg-white md:py-12'>
    <div className='container'>
      <div className='flex overflow-hidden ticket-gradient'>
        <div className='flex gap-14 items-center'>
          <Image className='logo-ticker-image' src={acmeLogo} alt='Acme Logo'></Image>
          <Image src={quantumLogo} alt='Quantum Logo'></Image>
          <Image src={echoLogo} alt='Echo Logo'></Image>
          <Image src={celestialLogo} alt='Celestial Logo'></Image>
          <Image src={pulseLogo} alt='Pulse Logo'></Image>
          <Image src={apexLogo} alt='Apex Logo'></Image>
        </div>
      </div>
    </div>
  </div>;
};
