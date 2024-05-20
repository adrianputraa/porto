import DefaultLayout from "@/components/layout/default-layout";
import AboutPage from "@/components/about/about";

export default function About() {
  return (
    <DefaultLayout>
      <div className="h-full w-full min-h-[calc(100dvh-4rem)] flex flex-col gap-2 p-2 pt-4 xl:p-0 items-center justify-start md:justify-center">
        <AboutPage />
      </div>
    </DefaultLayout>
  );
}
