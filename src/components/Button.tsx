"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "./Text";

interface ButtonProps {
  text: string;
  icon?: "full_arrow" | "empty_arrow" | "calendar";
  onClick?: () => void;
  url?: string;
}

const icons: { [key: string]: string } = {
  "full_arrow": "/full_arrow.svg",
  "empty_arrow": "/empty_arrow.svg",
  "calendar": "/calendar.svg",
};

const formats: { [key: string]: string } = {
  "full_arrow": "text-white bg-red-50 hover:bg-yellow focus:bg-yellow active:bg-red-60",
  "empty_arrow": "bg-yellow text-blue-60 hover:bg-white focus:bg-white active:bg-white",
  "calendar": "text-red-50 bg-transparent border-2 border-red-50 hover:bg-yellow hover:border-yellow focus:bg-yellow focus:border-yellow active:bg-red-60 active:border-red-60",
};

export default function Button({ text, icon, onClick, url }: ButtonProps) {
  const buttonContent = (
    <>
      {icon && (
        <Image
          alt="Button icon"
          src={icons[icon]}
          width={18}
          height={18}
          style={{ height: 'auto', width: 'auto' }}
        />
      )}
      <Text type="s" text={text} />
    </>
  );

  const commonClasses = `flex flex-row items-center justify-center gap-2 px-6 py-2 max-w-[fit-content] rounded-full ${icon ? formats[icon] : 'bg-blue-300 text-sm'}`;

  return url ? (
    <Link href={url} className={commonClasses}>
      {buttonContent}
    </Link>
  ) : (
    <button onClick={onClick} className={commonClasses}>
      {buttonContent}
    </button>
  );
}
