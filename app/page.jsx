import DefaultLayout from "@/components/layout/default-layout";
import Homepage from "@/components/home/homepage";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="h-full w-full min-h-[calc(100dvh-4rem)] flex flex-col gap-2 p-2 items-center justify-center">
        <Homepage />
      </div>
    </DefaultLayout>
  );
}
