import Link from "next/link"
import ThemeToggle from "./section/theme-toggle"
import SocialMediaButton from "./section/social-media"
import Navigation from "./section/navigation-menu"


export default function Navbar() {
    return (
        <nav className="w-[calc(100dvw)] h-[4rem] flex gap-2 items-center px-4 border-b border-neutral-400 dark:border-neutral-800">
            <div>
                <Link href='/' className="flex font-bold text-2xl">
                    <span>adrianputra</span>
                </Link>
            </div>

            <div className="hidden md:block mx-auto">
                <Navigation />
            </div>
            
            <div className="hidden md:block">
                <SocialMediaButton />
            </div>

            <div>
                <ThemeToggle />
            </div>
        </nav>
    )
}