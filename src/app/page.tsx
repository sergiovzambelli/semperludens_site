import Image from "next/image"
import text from "@/utils/text.json"
import Text from "@/components/Text";
import Button from "@/components/Button";
import EventCard from "@/components/EventCard";
import CollabGrid from "@/components/CollabGrid";
import Form from "@/components/Form/Form";
import LogoSL from "@/components/LogoSL";
import Icon from "@/components/Icon";

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
            <LogoSL height={150} width={100}/>
            <div className="flex flex-col gap-4">
              <Text type="xl" text={text.header.title} className="text-center"/>
              <Text type="s" text={text.header.subtitle} className="text-center"/>
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
          <Text type="m" text={text.first_section.box_1} className="text-center"/>
          <Text type="s" text={text.first_section.box_2} className="text-center"/>
          <Text type="s" text={text.first_section.box_3} className="text-center"/>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center">
          <Button text={text.first_section.contact_button} icon="full_arrow"/>
          <Button text={text.first_section.event_button} icon="calendar"/>
        </div>
      </div>

      {/* IMAGES */}
      <div className="flex flex-col">
        <Image
          src="/image_carousel/image_1.png"
          alt="Semper Ludens all together"
          width={420}
          height={500}
          style={{ height: 'auto', width: 'auto' }}
        />
        <Image
          src="/image_carousel/image_2.png"
          alt="Playing and having fun with Semper Ludens"
          width={420}
          height={500}
          style={{ height: 'auto', width: 'auto' }}
        />
        <Image
          src="/image_carousel/image_3.png"
          alt="Our team in Semper Ludens"
          width={420}
          height={500}
          style={{ height: 'auto', width: 'auto' }}
        />
        <Image
          src="/image_carousel/image_4.png"
          alt="Semper Ludens joining the after party together"
          width={420}
          height={500}
          style={{ height: 'auto', width: 'auto' }}
        />
      </div>

      {/* SECOND SECTION */}
      <div className="flex flex-col bg-red-50 px-8 py-32 gap-8">
        <div className="flex flex-col gap-4 text-white">
          <Text type="xl" text={text.second_section.title} className="text-yellow"/>
          <Text type="xs" text={text.second_section.box_1}/>
          <Text type="xs" text={text.second_section.box_2}/>
        </div>

        <div className="flex flex-col gap-4 text-white">
          <Text type="s" text={text.second_section.subtitle} className="font-bold"/>
          <EventCard event_url="/event_carousel/game_on_event.svg" text={text.second_section.event_1}/>
          <EventCard event_url="/event_carousel/role_play_event.svg" text={text.second_section.event_2}/>
        </div>
      </div>

      <div className="bg-red-60 relative z-10">
        <div className="absolute inset-0 z-20">
          <Image
            alt="Semper Ludens logo"
            src="/logo_bg.svg"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex flex-col px-8 py-16 gap-8 text-white">
          <Text type="l" text={text.second_section.contact_title} className="text-yellow font-bold z-30"/>
          <Text type="xs" text={text.second_section.contact_text} className="z-30"/>
          <Icon src={process.env.INSTAGRAM_URL as string} icon="/icons/instagram_icon.svg" alt="Instagram link" classname="z-40"/>
        </div>
      </div>


      {/* COLLAB */}
      <div className="flex flex-col justify-center items-center px-8 py-16">
        <Text type="xl" text={text.collab.title} className="text-blue-50"/>
        <CollabGrid/>
      </div>

      {/* FORM */}
      <div className="flex flex-col bg-blue-50 justify-center items-center px-8 py-16 gap-12">
        <div className="flex flex-col gap-8">
          <Text type="xl" text={text.form.title} className="text-yellow"/>
          <Text type="s" text={text.form.subtitle} className="text-white"/>
        </div>
        <Form/>
      </div>

    </main>
  );
}
