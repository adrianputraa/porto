import DefaultLayout from "@/components/layout/default-layout";
import Post from '@/components/blog/post'
import { recentPost } from '@/lib/constant/recent-post'

export default function BlogPost({ params }) {
  const { slug } = params
  const post = recentPost.filter((item) => item.slug === slug)[0]

  return (
    <DefaultLayout>
      <Post blog={post} />
    </DefaultLayout>
  );
}
