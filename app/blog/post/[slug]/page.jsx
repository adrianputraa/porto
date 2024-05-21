import DefaultLayout from "@/components/layout/default-layout";
import Post from '@/components/blog/post'
import { recentPost } from '@/lib/constant/recent-post'

export async function generateMetadata({ params }) {
    const { slug } = params
    const post = recentPost.filter((item) => item.slug === slug)[0]
    const titlePreview = post.title
    const contentPreview = post.article.substring(0, 20)
    const imagePreview = '/images/profileadrianputra-_400x400.jpg'

    const metadata = {
      title: `${titlePreview} - adrianputraa`,
      openGraph: {
        description: `${contentPreview}`,
        images: imagePreview
      }
    }

    return metadata
}

export default function BlogPost({ params }) {
  const { slug } = params
  const post = recentPost.filter((item) => item.slug === slug)[0]

  return (
    <>
      <DefaultLayout>
        <Post blog={post} />
      </DefaultLayout>
    </>
  );
}
