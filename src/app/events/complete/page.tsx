import LogoSL from "@/components/LogoSL";

export default function CompletePage() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-[100vh] overflow-x-hidden bg-blue-50">
      <div className="flex flex-col justify-center items-center font-inter min-w-[400px] max-w-[570px] pl-10 pr-10">
        <LogoSL width={150} height={150} />

        <div className="text-center mt-form-lg">
          <h2 className="px-[20.5px] flex justify-center items-center text-[50px] text-yellow font-gelica h-auto w-auto font-black">
            Grazie
          </h2>
        </div>

        <div className="flex flex-col items-center w-full text-center mt-form-sm px-[41px]">
          <p className="font-inter font-normal text-[16px] leading-5 text-white w-auto max-w-[234px]">
            Abbiamo correttamente registrato la tua iscrizione.
          </p>

          <p className="mt-form-sm font-inter font-bold text-[20px] leading-6 text-white w-auto max-w-[234px]">
            Ci vediamo il DATA ORA 💫
          </p>

          <p className="mt-form-sm font-inter font-bold text-[20px] leading-6 text-white w-auto max-w-[234px]">
            <a
              className="underline-offset-4 hover:underline"
              href="{{ $event_data->maps_link }}"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOVE
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center w-full text-center mt-form-lg">
          <a
            href="https://linktr.ee/semperludens"
            className="hover:bg-form-primary-yellow leading-5 font-inter text-[16px] font-normal flex items-center justify-center w-[202px] h-auto rounded-[50px] bg-white text-form-primary-blue border-0 py-[10.5px] px-[30px] cursor-pointer"
          >
            <p className="ml-[10px]">I nostri contatti</p>
          </a>
        </div>

        <div className="mb-24 w-full h-24"></div>
      </div>
    </main>
  );
}
