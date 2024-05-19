import IntroductionCard from "./section/introduction-card"
import RecentActivityTabs from "./section/recent-tabs"

export default function Homepage() {
    return (
        <>
            <section id="about" className="group max-w-[calc(100dvw-2rem)] md:max-w-2xl flex flex-col gap-4 justify-center p-4 overflow-x-hidden rounded-md border border-neutral-400 dark:border-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-900/50 transition-colors duration-500">
                <IntroductionCard />
            </section>
            
            <section id="about" className="flex gap-2 lg:gap-8 items-center select-none rounded-md w-[calc(100dvw-2rem)] md:w-full md:max-w-2xl justify-center p-4 overflow-x-hidden border border-neutral-400 dark:border-neutral-900 transition-colors duration-500">
                <RecentActivityTabs />
            </section>
        </>
    )
}