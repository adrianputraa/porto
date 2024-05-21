import DefaultLayout from "@/components/layout/default-layout"
import IndexPage from "@/components/blog/index"
import { recentPost } from "@/lib/constant/recent-post"

export const metadata = {
  title: 'Blog - adrianputraa',
  openGraph: { 
    description: 'Cooking something epic in Next.js and React | adrianputraa'
  }
}

export default function BlogIndex({ searchParams }) {
    const { cat } = searchParams

    const availablePost = () => {
        if (cat) {
            return recentPost.filter((item) => item.tags[0] === cat)
        }

        return recentPost
    }

    return (
        <DefaultLayout>
            <IndexPage list={availablePost()} />
        </DefaultLayout>
    )
}