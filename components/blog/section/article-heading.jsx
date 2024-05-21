'use client'
import { useContext } from "react"
import { Clock, Gamepad2, ChevronsRight, CodeXml, Newspaper } from "lucide-react"
import { formatDate } from "@/lib/formatter/date"
import { useToast } from "@/components/ui/use-toast"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { ArticleContext } from "./article-context"

export default function Heading() {
    const article = useContext(ArticleContext)
    const { title, date } = article
    const articleDate = formatDate(date)

    return (
        <>
            <div className="w-full flex gap-2 items-center rounded-md">
                <CategoryIcon />

                <div>
                    <h4 className="font-bold text-aesa-800 dark:text-aesa-400 text-xl xl:text-2xl truncate">{title}</h4>
                    <p className="flex items-center gap-1 font-medium text-aesa-600 dark:text-neutral-500 text-sm truncate">
                        <span><Clock size={12} /></span>
                        <span className="font-semibold">{'Posted on '}</span>
                        <time dateTime={articleDate}>{articleDate}</time>
                        <span className="font-semibold">{'by '}</span>
                        <AuthorName name='Adrian Putra' avatar="/images/profileadrianputra-_400x400.jpg" description={'Website Owner'}/>
                    </p>
                </div>
            </div>
        </>
    )
}

function AuthorName({ name, avatar, description }) {
    return (
        <HoverCard openDelay={200}>
            <HoverCardTrigger>
                <span className={`flex items-center gap-1 hover:cursor-pointer text-blue-500 hover:text-blue-400`}>
                    <Avatar className="w-[1rem] h-[1rem]">
                        <AvatarImage src={avatar} />
                        <AvatarFallback>AP</AvatarFallback>
                    </Avatar>

                    {name}
                    
                    <span className="sr-only">{name} avatar</span>
                </span>
            </HoverCardTrigger>

            <HoverCardContent>
                <div className="flex flex-col gap-2 items-start">
                    <div className="w-full flex items-center gap-2">
                        <Avatar className="w-[2rem] h-[2rem]">
                            <AvatarImage src={avatar} />
                            <AvatarFallback>AP</AvatarFallback>
                        </Avatar>

                        <span>{name}</span>
                    </div>
                    <p className="text-left text-sm">
                        {description}
                    </p>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

function CategoryIcon() {
    const { tags: tag } = useContext(ArticleContext)
    const normal = 48
    const mini = 16
    
    if (tag[0] === 'hobby') {
        return (
            <div className="flex gap-2 items-center ml-2">
                <span className="text-blue-400">
                    <Gamepad2 size={normal} />
                </span>

                <span className="text-neutral-600">
                    <ChevronsRight size={mini} />
                </span>
            </div>
        )
    }

    if (tag[0] === 'dev') {
        return (
            <span className="text-green-400">
                <CodeXml size={normal} />
            </span>
        )
    }

    return (
        <span className="text-yellow-400">
            <Newspaper size={normal} />
        </span>
    )
}