'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useToast } from '@/components/ui/use-toast'
import DiscordDarkIcon from '@/public/icons/discord-dark.svg'
import DiscordLightIcon from '@/public/icons/discord-light.svg'

import {
    Phone,
    Linkedin,
    Twitter,
    Github,
} from 'lucide-react'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from '@/components/ui/button'

export default function SocialMediaButton() {
    return (
        <div className='flex gap-2 text-neutral-800 dark:text-white'>
            <ShowHover 
                label='whatsapp' 
                href='https://wa.me/+6287816052023'
                icon={<Phone />}
            >
                <div>Click to message me on whatsapp!</div>
            </ShowHover>
            <ShowHover 
                label='github' 
                href='https://github.com/adrianputraa'
                icon={<Github />}
            >
                <div>Click to open my github!</div>
            </ShowHover>
            <ShowHover 
                label='linkedin' 
                href='https://linkedin.com/in/adrian-triputra-pangestu-999042220/'
                icon={<Linkedin />}
            >
                <div>Click to open my linkedin!</div>
            </ShowHover>
            {/* <ShowHover 
                label='discord' 
                href='#'
                icon={[DiscordDarkIcon, DiscordLightIcon]}
                link={false}
            >
                <div>Discord has no api, so add me manually using my username: @aesampah</div>
            </ShowHover>
            <ShowHover 
                label='twitter' 
                href='https://twitter.com/@aesampah'
                icon={<Twitter />}
            >
                <div>Click to open my twitter.. or X.</div>
            </ShowHover> */}
        </div>
    )
}

function ShowHover({ children, label, href, icon, link = true, delay = 200 }) {
    const { toast } = useToast()
    const copyDiscordUsername = () => {
        navigator.clipboard.writeText('@aesampah')
        toast({
            title: 'Discord username copied!',
            description: 'My discord username @aesampah has been copied to clipboard.'
        })
    }
    return (
        <HoverCard openDelay={delay}>
            <HoverCardTrigger asChild>
                <Link href={href} target={link ? '_blank' : '_self'}>
                        {label === 'discord' ? 
                        <Button type='button' variant="outline" size="icon" onClick={copyDiscordUsername}>
                            <Image src={icon[0]} alt={label} width={24} height={24} className='hidden dark:block'/>
                            <Image src={icon[1]} alt={label} width={24} height={24} className='block dark:hidden'/>
                            <span className="sr-only">{label} button</span>
                        </Button>
                        :
                        <Button type='button' variant="outline" size="icon">
                            {icon}
                            <span className="sr-only">{label} button</span>
                        </Button>
                        }
                </Link>
            </HoverCardTrigger>

            <HoverCardContent className="text-sm">
                {children}
            </HoverCardContent>
        </HoverCard>
    )
}