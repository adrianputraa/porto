import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabs = [
    {
        label: 'Recent Posts',
        value: 'blog'
    },
    {
        label: 'Recent Posts',
        value: 'blog'
    },
]

export default function RecentActivityTabs() {
    return (
        <Tabs defaultValue="blog" className="w-full">
            <TabsList className='bg-transparent gap-2'>
                <SytledTabsTrigger value="blog">
                    Recent Posts
                </SytledTabsTrigger>
                <SytledTabsTrigger value="projects">
                    Recent Projects
                </SytledTabsTrigger>
            </TabsList>

            <SytledTabsContent value="blog">
                Blog tab content
            </SytledTabsContent>

            <SytledTabsContent value="projects">
                Projects tab content
            </SytledTabsContent>
        </Tabs>
    )
}


function SytledTabsTrigger({ children, ...props}) {
    return (
        <TabsTrigger {...props} className='rounded-full !text-black data-[state=active]:bg-neutral-950 data-[state=active]:!text-white dark:!text-white dark:data-[state=active]:bg-neutral-200 dark:data-[state=active]:!text-black'>
            {children}
        </TabsTrigger>
    )
}


function SytledTabsContent({ children, ...props }) {
    return (
        <TabsContent {...props} className='p-2'>
            {children}
        </TabsContent>
    )
}