import MarkdownRenderer from "@/components/MardownRenderer";
import ShareButton from "@/components/ShareButton";
import { Card, CardContent } from "@/components/ui/card";
import { getMethod } from "@/services/http-requests";
import { Dot, Facebook, Linkedin, Twitter } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

const getBlogPost = async (id: string) => {
  // Simulating an API call
  const post = await getMethod({
    queryKey: [
      "posts",
      {
        route: `/posts/${id}`,
        params: {},
      },
    ],
  });

  return post;
};

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}): Promise<Metadata> {
  const post = await getBlogPost(searchParams.id);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.content.substring(0, 160),
      images: [post.image],
    },
  };
}

export default async function BlogPost({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}) {
  const { id } = await searchParams;
  console.log("hello", id);

  const post = await getBlogPost(searchParams.id);
  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center mb-6">
        <div className="flex items-center gap-x-2">
          <p className="text-sm text-gray-500">
            {new Date(post.createdAt).toLocaleString("en-us", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
          </p>
          <Dot size={16} />
          <p className="text-sm text-gray-500">
            {calculateReadTime(post.content)} min read
          </p>
        </div>
      </div>
      <Image
        src={post.image}
        alt={post.title}
        width={1200}
        height={630}
        className="rounded-lg mb-6"
      />
      <div className="prose max-w-none mb-8">
        <MarkdownRenderer content={post.content} />
      </div>
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Share this post</h2>
          <div className="flex space-x-4">
            <ShareButton
              network="twitter"
              url={`https://yourblog.com/blog/${post.slug}`}
              title={post.title}
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Share on Twitter</span>
            </ShareButton>
            <ShareButton
              network="facebook"
              url={`https://yourblog.com/blog/${post.slug}`}
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Share on Facebook</span>
            </ShareButton>
            <ShareButton
              network="linkedin"
              url={`https://yourblog.com/blog/${post.slug}`}
              title={post.title}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">Share on LinkedIn</span>
            </ShareButton>
            <ShareButton
              network="whatsapp"
              url={`https://yourblog.com/blog/${post.slug}`}
              title={post.title}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span className="sr-only">Share on WhatsApp</span>
            </ShareButton>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
