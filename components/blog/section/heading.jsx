'use client'
import { useContext } from "react"
import { useRouter } from "next/navigation"
import { Clock, Gamepad2, ChevronsRight, ChevronsLeft, CodeXml, Newspaper } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

import { ArticleContext } from "./context"
import { Button } from "@/components/ui/button"

const emailString = 'aesaprofiles@gmail.com'
const technologies = [
    {
        label: 'Visual Studio Code',
        icon: '/icons/vscode.svg',
        iconDark: '/icons/vscode.svg',
        description: 'Visual studio code for editing codes'
    },
    {
        label: 'Javascript',
        icon: '/icons/javascript.svg',
        iconDark: '/icons/javascript.svg',
        description: 'Thinking about something? Javascript probably could do that.'
    },
    {
        label: 'PHP',
        icon: '/icons/php.svg',
        iconDark: '/icons/php.svg',
        description: 'PHP for when dealing with wordpress or laravel.'
    },
    {
        label: 'Typescript',
        icon: '/icons/typescript.svg',
        iconDark: '/icons/typescript.svg',
        description: "Javascript with typing, for maintainable long-term codes."
    },
    {
        label: 'NextJS',
        icon: '/icons/nextjs-light.svg',
        iconDark: '/icons/nextjs-light.svg',
        description: "A web framework on-top of React, I'm most familliar with."
    },
    {
        label: 'Wordpress',
        icon: '/icons/wordpress.svg',
        iconDark: '/icons/wordpress.svg',
        description: "I'm not using it these days, but still comfortable maintaining wordpress websites."
    },
    {
        label: 'Electron',
        icon: '/icons/electron.svg',
        iconDark: '/icons/electron.svg',
        description: "I use it for building desktop application that works on Windows, MacOS and Linux."
    },
    {
        label: 'postgreSQL',
        icon: '/icons/postgresql.svg',
        iconDark: '/icons/postgresql.svg',
        description: "PostgreSQL, I mostly use this on-cloud web application I build."
    },
    {
        label: 'sqlite3',
        icon: '/icons/sqlite.svg',
        iconDark: '/icons/sqlite.svg',
        description: "I use it on limited-resource server as it is portable and embedded within the application itself."
    },
    {
        label: 'MongoDB',
        icon: '/icons/mongodb.svg',
        iconDark: '/icons/mongodb.svg',
        description: "Non-relational database, mongoDB is practically a database that store in JSON, pretty good when building blogs."
    },
    {
        label: 'mariaDB',
        icon: '/icons/mariadb-light.svg',
        iconDark: '/icons/mariadb-dark.svg',
        description: "I only use this when building Wordpress, it's easier to use and manage."
    },
    {
        label: 'Adobe Illustrator',
        icon: '/icons/adobe-illustrator.svg',
        iconDark: '/icons/adobe-illustrator.svg',
        description: 'I only use Adobe Illustrator to optimize large Vector Images, or making a logo or an icon if necessary.'
    },
    {
        label: 'Adobe Photoshop',
        icon: '/icons/adobe-photoshop.svg',
        iconDark: '/icons/adobe-photoshop.svg',
        description: "Same as Illustrator, I only use this to resize or retouch images for optimizing website performances."
    },
]

export default function Heading() {
    const article = useContext(ArticleContext)
    const { title, date } = article

    return (
        <>
            <div className="w-full flex gap-2 items-center rounded-md">
                <CategoryIcon />

                <div>
                    <h4 className="font-bold text-aesa-800 dark:text-aesa-400 text-xl xl:text-2xl truncate">{title}</h4>
                    <p className="flex items-center gap-1 font-medium text-aesa-600 dark:text-neutral-500 text-sm truncate">
                        <span><Clock size={12} /></span>
                        <span className="font-semibold">{'Posted on '}</span>
                        <span>{date.toDateString()}</span>
                        <span className="font-semibold">{'by '}</span>
                        <span className="flex items-center gap-1 ">
                            <Avatar className="w-[1rem] h-[1rem]">
                                <AvatarImage src="/images/profileadrianputra-_400x400.jpg" />
                                <AvatarFallback>AP</AvatarFallback>
                            </Avatar>
                            {'Adrian Putra'}
                        </span>
                    </p>
                </div>
            </div>
        </>
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