"use client";
import { getMethod } from "@/services/http-requests";
import { Dot } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Link from "next/link";
import MarkdownRenderer from "./MardownRenderer";
import { IPost } from "@/interfaces/post.interface";
import { slugify } from "@/lib/slugify";

const PostList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const res = await getMethod({
        queryKey: [
          "posts",
          {
            route: "/api/posts",
            params: {},
          },
        ],
      });
      setLoading(false);
      setPosts(res);
    };
    getPosts();
  }, []);
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
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
                <div className="flex items-center">
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
                      className="rounded-2xl border border-zinc-300 px-2 py-0.5 md:text-xs text-[10px] text-[var(--link-color)] no-underline transition-all duration-700 hover:border-zinc-700"
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
  );
};

export default PostList;
