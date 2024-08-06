import LogoSL from "./LogoSL";
import Text from "./Text";
import text from "@/utils/text.json";
import TextIcon from "./TextIcon";
import Icon from "./Icon";

export default function Footer() {
  return(
    <div className="flex flex-col">
      <div className="bg-blue-60 flex flex-col px-8 py-16 items-center justify-center gap-10">
        <div className="flex flex-col gap-8">
          <LogoSL height={50} width={50}/>
          <Text text={text.footer.text} type="s" className="text-white"/>  
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Text text={text.footer.contact} type="l" className="text-white"/>
          <TextIcon icon="/icons/email_icon.svg" text={text.footer.email} text_type="s" text_classname="text-white"/>
          <TextIcon icon="/icons/phone_icon.svg" text={text.footer.number} text_type="s" text_classname="text-white"/>
        </div>
        <div className="flex flex-row w-full gap-4">
          <Icon src={process.env.INSTAGRAM_URL as string} icon="/icons/instagram_icon.svg" alt="Instagram link"/>
          <Icon src={process.env.FACEBOOK_URL as string} icon="/icons/facebook_icon.svg" alt="Facebook link"/>
          <Icon src={process.env.DISCORD_URL as string} icon="/icons/discord_icon.svg" alt="Discord link"/>
        </div>
      </div>
      <div className="bg-blue-70 w-full flex flex-col px-8 py-4 gap-2">
        <Text text={text.footer.rights} type="s" className="text-white"/>
        <Text text={text.footer.privacy} type="s" className="text-white"/>
      </div>
    </div>
)
}