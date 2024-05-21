import { Newspaper, ChevronsRight } from "lucide-react"

export default function IndexHeading() {
    return (
        <>
            <div className="w-full flex gap-2 items-center rounded-md">
                <PageIcon />

                <div>
                    <h4 className="font-bold text-aesa-800 dark:text-aesa-400 text-xl xl:text-2xl truncate">Blog</h4>
                </div>
            </div>
        </>
    )
}


function PageIcon() {
    const normal = 48
    const mini = 16

    return (
        <div className="flex gap-2 items-center ml-2">
            <span className="text-yellow-400">
                <Newspaper size={normal} />
            </span>
            
            <span className="text-neutral-600">
                <ChevronsRight size={mini} />
            </span>
        </div>
    )
}