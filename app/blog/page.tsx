import MarkdownRenderer from "@/components/MardownRenderer";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { IPost } from "@/interfaces/post.interface";
import { slugify } from "@/lib/slugify";
import { getMethod } from "@/services/http-requests";
import { Dot } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Posts | Your Blog Name",
  description: "Read our latest blog posts on various topics.",
  openGraph: {
    title: "Blog Posts | Your Blog Name",
    description: "Read our latest blog posts on various topics.",
    type: "website",
    url: "https://mide.codes/blog",
    images: [
      {
        url: "/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Posts | Your Blog Name",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Posts | Your Blog Name",
    description: "Read our latest blog posts on various topics.",
    images: ["/blog-og-image.jpg"],
  },
};

const getBlogPosts = async () => {
  const res = await getMethod({
    queryKey: [
      "posts",
      {
        route: "/posts",
        params: {},
      },
    ],
  });
  return res;
};

export default async function BlogList() {
  const posts: IPost[] = await getBlogPosts();
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Blog Posts</h1>
      <div className="flex flex-col justify-center items-center gap-y-4">
        {posts.map((post) => {
          const slug = slugify(post.title);
          return (
            <Card
              key={post._id}
              className="flex flex-col md:w-2/3 cursor-pointer"
            >
              {/* <CardHeader className="p-0">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="rounded-t-lg object-cover h-48 w-full"
              />
            </CardHeader> */}
              <CardContent className="flex-grow p-6">
                <CardTitle className="mb-2">
                  <Link
                    href={`/blog/${slug}?id=${post._id}`}
                    className="hover:underline"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
                <MarkdownRenderer content={post.content.split(".")[0]} />
              </CardContent>
              <CardFooter className="pt-0 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center ">
                    <p className="text-xs text-muted-foreground">
                      {new Date(post.createdAt).toLocaleString("en-us", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </p>
                    <Dot size={16} />
                    <p className="text-xs text-muted-foreground">
                      {calculateReadTime(post.content)} min read
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-2 capitalize ml-5">
                    {(post.tags || [])?.map((tag: string) => (
                      <a
                        key={tag}
                        className="rounded-2xl border border-zinc-300 px-2 py-0.5 text-xs text-[var(--link-color)] no-underline transition-all duration-700 hover:border-zinc-700"
                        // href={`/tags/${slugifyStr(tag)}`}
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
