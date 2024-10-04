import CreateEventForm from "@/components/Admin/createEventForm";
import CreateGameForm from "@/components/Admin/createGameForm";
import Text from "@/components/Text";

export default function AdminPage() {
  return (
    <main className="flex flex-col h-[100vh] bg-red-50 items-center justify-center gap-14">
      <Text text="Admin Page" type="xl" className="!text-yellow"/>

      <div className="flex flex-row gap-14 items-center justify-center w-full max-w-[1700px]">
        <CreateEventForm />
        <CreateGameForm />
      </div>
    
    </main>
  );
}