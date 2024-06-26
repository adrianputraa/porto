'use client'
import { useContext } from 'react'
import Link from 'next/link'
import { ArticleContext } from './article-context'
import { Button } from '@/components/ui/button'

export default function Content() {
    const article = useContext(ArticleContext)

    return (
        <div className='flex flex-col gap-2 items-center justify-center'>
            <div className="group w-full py-2 px-4 rounded-md flex flex-col gap-2 hover:bg-neutral-200 dark:hover:bg-neutral-900 select-text transition-colors duration-200">
                <div>
                    <p className='text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-300 whitespace-pre-line'>
                        {article.article}
                    </p>
                </div>
            </div>

            <Link href='/blog'>
                <Button type={'button'} variant={'secondary'} className='group rounded-full bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-800'>
                    <span className='border-b border-dashed border-transparent group-hover:border-neutral-700 text-neutral-700 dark:group-hover:border-neutral-400 dark:text-neutral-400'>
                        {'View other blog posts'}
                    </span>
                </Button>
            </Link>
        </div>
    )
}