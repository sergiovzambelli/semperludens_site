"use client";

import Image from "next/image"
import Text from "./Text" 

interface ButtonProps {
  text: string,
  icon: "full_arrow" | "empty_arrow" | "calendar",
  onClick?: () => void
}

const icons : {[key:string]: string} = {
  "full_arrow": "/full_arrow.svg",
  "empty_arrow": "/empty_arrow.svg",
  "calendar": "/calendar.svg",
}

const formats: { [key: string]: string } = {
  "full_arrow": "text-white bg-red-50",
  "empty_arrow": "",
  "calendar": "text-red-50 bg-transparent border-2 border-red-50",
} 

export default function Button({ text, icon, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`flex flex-row items-center justify-center gap-2 px-6 py-2 max-w-[fit-content] rounded-full ${formats[icon]}`}>
      <Image
        alt="Button icon"
        src={icons[icon]}
        width={18}
        height={18}
        style={{ height: 'auto', width: 'auto' }}
      />
      <Text type="s" text={text}/>
    </button>
  )
}