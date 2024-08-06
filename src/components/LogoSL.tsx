import Image from 'next/image';

interface LogoSLProps {
  height: number;
  width: number;
}

export default function LogoSL({height, width}: LogoSLProps) {
  return(
    <Image
      className='max-w-[fit-content]'
      alt="Semper Ludens logo"
      src="/logo_SL.svg"
      width={height}
      height={width}
      style={{ height: 'auto', width: 'auto' }}
    />
  )
}
  