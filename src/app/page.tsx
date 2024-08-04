import Image from "next/image"
import text from "@/utils/text.json"
import Text from "@/components/Text";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <div className="h-dvh min-h-[700px] relative">
        <div className="absolute inset-0 -z-10">
          <Image
            alt="Semper Ludens background"
            src="/hero_bg.png"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="h-dvh min-h-[700px] flex flex-col justify-between items-center p-24">
          <div className="flex flex-col justify-center items-center text-white gap-10">
            <Image
              alt="Semper Ludens logo"
              src="/logo_SL.svg"
              width={150}
              height={100}
              style={{ height: 'auto', width: 'auto' }}
            />
            <div className="flex flex-col gap-4">
              <Text type="xl" text={text.header.title}/>
              <Text type="s" text={text.header.subtitle}/>
            </div>
          </div>

          <Image
              alt="Scroll down button"
              src="/scrolling_header.svg"
              width={40}
              height={70}
              style={{ height: 'auto', width: 'auto' }}
            />
        </div>
      </div>

      {/* FIRST SECTION */}
      <div className="flex flex-col px-8 py-32 gap-16">
        <div className="flex flex-col gap-4 items-center justify-center">
          <Text type="m" text={text.first_section.box_1}/>
          <Text type="s" text={text.first_section.box_2}/>
          <Text type="s" text={text.first_section.box_3}/>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center">
          <Button text={text.first_section.contact_button} icon="full_arrow"/>
          <Button text={text.first_section.event_button} icon="calendar"/>
        </div>
      </div>

      {/* IMAGES */}
      <div>
        
      </div>

      {/* SECOND SECTION */}
      <div>
        
      </div>

      {/* COLLAB */}
      <div>
        
      </div>

      {/* FORM */}
      <div>
        
      </div>

    </main>
  );
}
