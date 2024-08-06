"use client";

import Image from 'next/image';

interface IconProps {
  icon: string;
  alt: string;
  src: string;
  classname?: string;
}

export default function Icon({icon, alt, src, classname=""}: IconProps) {
  return(
    <Image 
      onClick={() => window.open(src, '_blank')}
      src={icon}
      alt={alt}
      width={42}
      height={42}
      className={`max-h-[42px] max-w-[42px] cursor-pointer ${classname}`}
      style={{ height: 'auto', width: 'auto' }}
    />
  )
}