import {blogs} from "@/.velite/generated";
import FeaturedPosts from "@/src/components/Blogs/FeaturedPosts";
import HomeCoverSection from "@/src/components/Blogs/HomeCoverSection";
import RecentPosts from "@/src/components/Blogs/RecentPosts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={blogs} />
      <FeaturedPosts blogs={blogs} />
      <RecentPosts blogs={blogs} />
    </main>
  )
}
