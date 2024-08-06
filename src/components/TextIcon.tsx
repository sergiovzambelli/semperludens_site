import Image from "next/image";
import Text from "./Text";

interface TextIconProps {
  icon: string;
  text: string;
  text_type: string;
  text_classname: string;
}

export default function TextIcon({icon, text, text_type, text_classname}: TextIconProps) {
  return (
    <div className="flex flex-row gap-4 items-center">
      <Image
        alt="Icon"
        src={icon}
        width={24}
        height={24}
        style={{ height: 'auto', width: 'auto' }}
      />
      <Text text={text} type={text_type} className={text_classname}/>
    </div>
  );
}