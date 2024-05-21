import List from "./section/index-list"
import IndexProvider from "./section/index-context"

export default function IndexPage({ list }) {
    if (typeof list === 'undefined') {
        return (
            <div className="h-full w-full min-h-[calc(100dvh-4rem)] flex flex-col gap-2 m-2 pt-4 xl:p-0 items-center justify-start md:justify-center">
                    <section id="blog_search" className="flex gap-2 lg:gap-8 items-center select-none rounded-md w-[calc(100dvw-2rem)] md:w-full md:max-w-2xl justify-center p-4 overflow-x-hidden border border-neutral-400 dark:border-neutral-900 transition-colors duration-500">
                        There is an error while getting blog index
                    </section>
            </div>
        )
    }

    return (
        <div className="h-full w-full min-h-[calc(100dvh-4rem)] flex flex-col gap-2 m-2 pt-4 xl:p-0 items-center justify-start md:justify-center">
            <IndexProvider value={list}>
                <section id="blog_search" className="flex gap-2 lg:gap-8 items-center select-none rounded-md w-[calc(100dvw-2rem)] md:w-full md:max-w-2xl justify-center p-4 overflow-x-hidden border border-neutral-400 dark:border-neutral-900 transition-colors duration-500">
                    <List />
                </section>
            </IndexProvider>
        </div>
    )
}