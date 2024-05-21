"use client"
import * as React from "react"
import Link from "next/link"
import { ChevronRight, ChevronsRight, CodeXml, Gamepad2 } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle() + ' !font-bold'}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle() + ' !font-bold'}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className='font-bold'>Blog</NavigationMenuTrigger>
          <NavigationMenuContent className='bg-gradient-to-br from-white via-white to-neutral-400/25 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900/25'>
            <ul className="w-[400px] flex flex-col gap-2 p-4">
              <p className="text-neutral-400 font-semibold">Categories</p>
              <li className="w-full">
                <Link legacyBehavior passHref href={'/blog?cat=hobby'}>
                  <NavigationMenuLink className="w-fit flex items-center gap-2 rounded-md px-3 py-2 hover:text-blue-600 dark:hover:text-blue-400 dark:hover:bg-neutral-800 transition-colors duration-150">
                      <ChevronRight size={16}/>
                      <Gamepad2 />
                      <span>Hobby</span>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li className="w-full">
                <Link legacyBehavior passHref href={'/blog?cat=dev'}>
                  <NavigationMenuLink className="w-fit flex items-center gap-2 rounded-md px-3 py-2 hover:text-green-600 dark:hover:text-green-400 dark:hover:bg-neutral-800 transition-colors duration-150">
                      <ChevronRight size={16}/>
                      <CodeXml />
                      <span>Progamming</span>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li className="w-full">
                <Link legacyBehavior passHref href={'/blog'}>
                  <NavigationMenuLink className="w-fit flex items-center gap-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-orange-900 dark:hover:text-neutral-300 transition-colors duration-150">
                      <ChevronsRight size={24}/>
                      <span>View all</span>
                  </NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

