import ArticleProvider from "./section/context"
import Heading from "./section/heading"
import Content from "./section/content"

export default function ViewPostPage({ blog }) {
    return (
        <div className="h-full w-full min-h-[calc(100dvh-4rem)] flex flex-col gap-2 m-2 pt-4 xl:p-0 items-center justify-start md:justify-center">
            <ArticleProvider value={blog}>
                <section id="post_head" className="group w-full max-w-[calc(100dvw-2rem)] md:max-w-2xl flex flex-col gap-4 justify-center p-4 overflow-x-hidden rounded-md border border-neutral-400 dark:border-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-900/50 transition-colors duration-500">
                        <Heading />
                </section>

                <section id="post_content" className="flex gap-2 lg:gap-8 items-center select-none rounded-md w-[calc(100dvw-2rem)] md:w-full md:max-w-2xl justify-center p-4 overflow-x-hidden border border-neutral-400 dark:border-neutral-900 transition-colors duration-500">
                    <Content />
                </section>
            </ArticleProvider>
        </div>
    )
}