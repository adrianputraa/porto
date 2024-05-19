'use client'
import { Gauge, Eye, Leaf, Linkedin, Github, Phone, Mail, X, Check } from "lucide-react"
import Link from "next/link"

import { useToast } from "@/components/ui/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import Image from "next/image"

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

export default function IntroductionCard() {
    return (
        <>
            <div className="flex gap-2 lg:gap-8 items-center rounded-md">
                <Avatar className="w-[6rem] h-[6rem] lg:w-[8rem] lg:h-[8rem]">
                    <AvatarImage src="/images/profileadrianputra-_400x400.jpg" />
                    <AvatarFallback>AP</AvatarFallback>
                </Avatar>

                <div>
                    <h4 className="font-bold text-aesa-800 dark:text-aesa-400  text-xl xl:text-4xl">Adrian Putra</h4>
                    <h6 className="font-bold dark:font-medium text-aesa-400 dark:text-aesa-600 text-lg xl:text-2xl">Front End Developer</h6>
                    <p className="xl:text-lg">
                        <span className="flex flex-wrap items-center gap-1">
                            {'Writing'}
                            <TextTooltip label={'Efficient'} icon={<Gauge />} color={'red'}>
                                <p className="text-sm">Async, whenever possible.</p>
                                <code className="w-full bg-zinc-800 text-sm p-2 rounded">
                                    <span className="text-red-500">
                                        {' const getReallyBigData = (): any => {...}; '} 
                                        <br/>
                                        <span>
                                            {' const data = getReallyBigData();'}
                                        </span>
                                        <br />
                                        <span className="text-neutral-400">
                                            {' // App stalls and wait here until "data" is ready'}
                                        </span>
                                        <br/>
                                        {' console.log(item)'} 
                                        <br/>
                                        <span className="text-neutral-400">
                                            {' // rest of the code needs to wait'}
                                        </span>
                                        <br/>
                                        {' {...} '} 
                                    </span>
                                    <br/>
                                    <br/>
                                    <span className='text-green-400'>
                                        {' const getReallyBigData = '} <span className="text-purple-400">async</span> {' (): Promise<Any> => {...}; '} 
                                        <br/>
                                        <span>
                                            {' const data = '} <span className="text-purple-400">await</span> {' getReallyBigData();'}
                                        </span>
                                        <br/>
                                        <span className="text-neutral-400">
                                            {' // App will comeback here whenever "data" is ready.'}
                                        </span>
                                        <br/>
                                        {' console.log(item)'} 
                                        <br/>
                                        <span className="text-neutral-400">
                                            {' // rest of the codes continues to run'}
                                        </span>
                                        <br/>
                                        {' {...} '} 
                                    </span>
                                </code>
                            </TextTooltip>
                            <TextTooltip label={'Maintainable'} icon={<Leaf />} color={'green'}>
                                <p className="text-sm">You won't give other people headache <br /> when you properly name your variable.</p>
                                <code className="w-full bg-zinc-800 text-sm p-2 rounded">
                                    <span className="text-red-500">
                                        <span className="text-neutral-400">
                                            {' // what is p, q, i, l, ac, c ?'}
                                        </span>
                                        <br/>
                                        {' const { '} <span className="text-purple-400">p, q</span> {' } = i; '} 
                                        <br/>
                                        {' '} <span className="text-purple-400">p</span> {' = '} <span className="text-purple-400">l.p</span> {' = '} <span className="text-purple-400">g.p</span>{';'}
                                        <br/>
                                        {' '} <span className="text-purple-400">ap</span> {' ?? '} <span className="text-purple-400">c()</span>{';'}
                                    </span>
                                    <br/>
                                    <br/>
                                    <span className='text-green-400'>
                                        <span className="text-neutral-400">
                                            {' // oh its price, qty an so on...'}
                                        </span>
                                        <br/>
                                        {' const { price, qty } = item; '}
                                        <br/>
                                        {' price = local.price = global.price;'} 
                                        <br/>
                                        {' authorizedPayment ?? calculate();'}
                                    </span>
                                </code>
                            </TextTooltip>
                            <TextTooltip label={'Clean'} icon={<Eye />} color={'blue'}>
                                <p className="text-sm">Sometimes, less lines = eye movement = less tiring.</p>
                                <code className="w-full bg-zinc-800 text-sm p-2  rounded">
                                    <span className="text-red-500">
                                        {' const price = item.price; '} 
                                        <br/>
                                        {' const qty = item.qty; '} 
                                        <br/>
                                        {' price = local.price; '}
                                        <br/>
                                        {' local.price = global.price; '} 
                                        <br/>
                                        {' if (true) {'}
                                        <br/>
                                        <span className="ml-4">
                                            {' doSomething(); '}
                                        </span>
                                        <br/>
                                        {' } '}
                                    </span>
                                    <br/>
                                    <br/>
                                    <span className='text-green-400'>
                                        {' const { price, qty } = item; '}
                                        <br/>
                                        {' price = local.price = global.price;'} 
                                        <br/>
                                        {' true ?? doSomething();'}
                                    </span>
                                </code>
                            </TextTooltip>
                            {'codes with'}
                            <span className="px-1 text-[0.95rem] font-semibold bg-neutral-700 dark:bg-neutral-300 text-white dark:text-black rounded-md animate-pulse">minimalist</span> 
                            {'designs.'}
                        </span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex gap-2 items-center pb-2 w-fit md:w-full">
                    {technologies.map((item, index) => (
                        <TechnologyButton 
                            key={index} 
                            label={item.label} 
                            icon={item.icon} 
                            iconDark={item.iconDark} 
                            description={item.description}    
                        />
                    ))}
                </div>

                <div className="w-full flex gap-2 items-center pt-2 border-t border-neutral-400 dark:border-neutral-900">
                    <LinkTooltip 
                        label='github' 
                        href='https://github.com/adrianputraa'
                        icon={<Github />}
                    >
                        <div>Click to open my github!</div>
                    </LinkTooltip>
                    <LinkTooltip 
                        label='linkedin' 
                        href='https://linkedin.com/in/adrian-triputra-pangestu-999042220/'
                        icon={<Linkedin />}
                    >
                        <div>Click to open my linkedin!</div>
                    </LinkTooltip>
                    <LinkTooltip 
                        label='email' 
                        href='#'
                        icon={<Mail />}
                        link={false}
                    >
                        <div>Click to copy my email: aesaprofiles@gmail.com</div>
                    </LinkTooltip>
                </div>
            </div>
        </>
    )
}

function TextTooltip({ children, label, icon, color }) {
    const style = `border-${color}-400 hover:border-${color}-300 text-${color}-600 hover:text-${color}-500 dark:text-${color}-400 dark:hover:text-${color}-300`
    return (
        <HoverCard openDelay={200}>
            <HoverCardTrigger>
                <span className={`animate-pulse hover:animate-none ml-1 flex items-center gap-1 border-b-2 border-dashed ${style} hover:cursor-pointer transition-colors duration-2000`}>
                    {icon} 
                    {label.toLowerCase()}
                </span>
            </HoverCardTrigger>

            <HoverCardContent className='w-fit'>
                <div className="flex flex-col gap-2 items-start">
                    <div className={"w-full flex gap-2 items-center " + style}>
                        {icon}
                        {label}
                    </div>

                    {children}
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}


function TechnologyButton({ label, icon, iconDark, description }) {
    const hidden = label === "Adobe Illustrator" || label === "Adobe Photoshop" ? 'hidden md:block' : ''
    return (
        <HoverCard openDelay={200}>
            <HoverCardTrigger>
                <span className={`h-8 w-8 flex items-center justify-center rounded p-1 border hover:!border-neutral-800 bg-neutral-200 hover:!bg-neutral-100 dark:bg-neutral-800 dark:hover:!bg-neutral-700 hover:cursor-pointer transition-colors duration-200 group-hover:border-neutral-400 dark:group-hover:border-neutral-950 group-hover:bg-white dark:group-hover:bg-neutral-950 ${hidden}`}>
                    <Image src={icon} alt={label} width={20} height={20} className="block dark:hidden"/>
                    <Image src={iconDark} alt={label} width={20} height={20} className="hidden dark:block"/>
                    <span className="sr-only">{label} icon</span>
                </span>
            </HoverCardTrigger>

            <HoverCardContent>
                <div className="flex flex-col gap-2 items-start">
                    <div className="w-full flex gap-2">
                        <Image src={icon} alt={label} width={20} height={20} className="block dark:hidden"/>
                        <Image src={iconDark} alt={label} width={20} height={20} className="hidden dark:block"/>
                        <span>{label}</span>
                    </div>
                    <p className="text-left text-sm">
                        {description}
                    </p>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

function LinkTooltip({ children, label, href, icon, link = true, delay = 200 }) {
    const { toast } = useToast()
    const copyEmailToClipboard = () => {
        toast({
            title: 'You just copied my email! aesaprofiles@gmail.com',
            description: 'Paste it on your favourite email client and services :)',
            variant: 'success'
        })
    }
    return (
        <HoverCard openDelay={delay}>
            <HoverCardTrigger asChild>
                {label === 'email' ? 
                    <span className={`h-10 w-fit flex gap-2 items-center justify-center rounded ml-auto p-1 px-2 border bg-neutral-200 hover:!bg-neutral-100 dark:bg-neutral-800 dark:hover:!bg-neutral-700 hover:cursor-pointer transition-colors duration-200 group-hover:border-neutral-400 dark:group-hover:border-neutral-950 group-hover:bg-white dark:group-hover:bg-neutral-950`}
                    onClick={() => copyEmailToClipboard()}>
                        {icon}
                        <span className="text-sm">aesaprofiles@gmail.com</span>
                        <span className="sr-only">{label} button</span>
                    </span>
                :
                <Link href={href} target={link ? '_blank' : '_self'} className={label === 'email' && 'ml-auto'}>
                    <span className={`h-10 w-fit flex gap-2 items-center justify-center rounded p-1 px-2 border bg-neutral-200 hover:!bg-neutral-100 dark:bg-neutral-800 dark:hover:!bg-neutral-700 hover:cursor-pointer transition-colors duration-200 group-hover:border-neutral-400 dark:group-hover:border-neutral-950 group-hover:bg-white dark:group-hover:bg-neutral-950`}>
                        {icon}
                        <span className="sr-only">{label} button</span>
                    </span>
                </Link>
                }
            </HoverCardTrigger>

            <HoverCardContent>
                {children}
            </HoverCardContent>
        </HoverCard>
    )
}