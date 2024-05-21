'use client'
import { useContext, useState } from 'react'
import Link from 'next/link'
import { ChevronsRight, Gamepad2, Newspaper, CodeXml , Clock, LoaderCircle } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { IndexContext } from './index-context'
import { formatDate } from '@/lib/formatter/date'
import { Button } from '@/components/ui/button'

export default function IndexList() {
    

    return (
        <div className='flex flex-col gap-2 items-center justify-center'>
            <ListMenu />
        </div>
    )
}

function ListMenu() {
    const [isLoaded, setLoadedState] = useState(false)
    const [isLoading, setLoadingState] = useState(false)
    const postIndex = useContext(IndexContext)
    const { toast } = useToast()
    const loadMorePost = () => {
        if (isLoaded) {
            setTimeout(() => {
                toast({
                    title: 'No more post to load :(',
                    description: '',
                    variant: 'destructive'
                })
            })
        } else {
            setLoadingState(true)
            
            setTimeout(() => {
                setLoadedState(true)
                toast({
                    title: 'All post are loaded :)',
                    description: 'You are seeing all the post available.'
                })
                setLoadingState(false)
            }, 1000)
        }

    }

    if (postIndex.length === 0) {
        return (
            <>
                <p>
                    {'It seems there is no other post in this category'}
                </p>

                <Link href='/blog'>
                    <Button type={'button'} variant={'secondary'} className='group rounded-full bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-800'>
                        <span className='border-b border-dashed border-transparent group-hover:border-neutral-700 text-neutral-700 dark:group-hover:border-neutral-400 dark:text-neutral-400'>
                            {'See all posts'}
                        </span>
                    </Button>
                </Link>
            </>
        )
    }

    return (
        <>
            {postIndex.map((post, index) => (
                <Link key={index} href={`/blog/post/${post.slug}`}>
                    <div className="group w-full py-2 px-4 rounded-md flex flex-col gap-2 hover:bg-neutral-200 dark:hover:bg-neutral-900 hover:cursor-pointer transition-colors duration-200">
                        <div className="flex flex-col">
                            <div className='flex items-center justify-start gap-1'>
                                <span className={`${post.tags[0] === 'hobby' ? 'text-blue-400' : post.tags[0] === 'dev' ? 'text-green-400' : 'text-neutral-400'}`}>
                                    <TitleIcon tag={post.tags[0]} />
                                </span>
                                <span className='text-neutral-500'>
                                    <ChevronsRight size={16}/>
                                </span>
                                <p className='group-hover:underline flex gap-2 text-lg truncate'>
                                    {post.title}
                                </p>
                            </div>

                            <div className='flex items-center justify-start gap-1 font-semibold text-neutral-600 group-hover:text-neutral-500'>
                                <span>
                                    <Clock size={12}/>
                                </span>
                                <p className='flex gap-2 text-sm'>
                                    {formatDate(post.date)}
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className='text-neutral-800 dark:text-neutral-500 dark:group-hover:text-neutral-300 text-sm line-clamp-3'>
                                {post.article}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}


            <Button type={'button'} onClick={loadMorePost} variant={'secondary'} className='group rounded-full bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-800'>
                <span className='border-b border-dashed border-transparent group-hover:border-neutral-700 text-neutral-700 dark:group-hover:border-neutral-400 dark:text-neutral-400'>
                    {isLoading ? <LoaderCircle className='animate-spin' /> : isLoaded ? 'No more post to load :)' : 'Load more blog posts'}
                </span>
            </Button>
        </>
    )
}

function TitleIcon({ tag }) {
    if (tag === 'hobby') {
        return <Gamepad2 size={20} />
    }

    if (tag === 'dev') {
        return <CodeXml size={20} />
    }

    return <Newspaper size={20} />
}