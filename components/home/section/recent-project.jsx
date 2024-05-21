import { Skeleton } from "@/components/ui/skeleton"

export default function RecentProject() {
    return (
        <div className="flex flex-col gap-2">
            {Array(3).fill(undefined).map((item, index) => <ProjectSkeleton key={index} />)
            }
        </div>
    )
}

function ProjectSkeleton() {
    return (
        <div className='flex gap-2 items-start justify-center'>
            <Skeleton className="w-16 h-14 rounded-full" />
            <div className="w-full rounded-md flex flex-col items-center gap-2">
                <Skeleton className="w-full h-8" />
                <Skeleton className="w-full h-16" />
            </div>
        </div>
    )
}