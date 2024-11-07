import { Icons } from "@/components/DockActions";
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
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-y-4">
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
        <div className="flex space-x-4">
          <ShareButton
            network="x"
            url={`https://mide.codes/blog/${params.slug}?id=${post._id}`}
            title={post.title}
          >
            <Icons.x className="h-5 w-5" />
            <span className="sr-only">Share on Twitter</span>
          </ShareButton>
          <ShareButton
            network="facebook"
            url={`https://mide.codes/blog/${params.slug}?id=${post._id}`}
          >
            <Icons.facebook className="h-5 w-5" />
            <span className="sr-only">Share on Facebook</span>
          </ShareButton>
          <ShareButton
            network="linkedin"
            url={`https://mide.codes/blog/${params.slug}?id=${post._id}`}
            title={post.title}
          >
            {" "}
            <Icons.linkedin className="h-5 w-5" />
            <span className="sr-only">Share on LinkedIn</span>
          </ShareButton>
          <ShareButton
            network="whatsapp"
            url={`https://mide.codes/blog/${params.slug}?id=${post._id}`}
            title={post.title}
          >
            <Icons.whatsapp className="h-5 w-5 dark:fill-white" />
            <span className="sr-only">Share on WhatsApp</span>
          </ShareButton>
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
              network="x"
              url={`https://mide.codes/blog/${params.slug}?id=${post._id}`}
              title={post.title}
            >
              <Icons.x className="h-5 w-5" />
              <span className="sr-only">Share on Twitter</span>
            </ShareButton>
            <ShareButton
              network="facebook"
              url={`https://mide.codes/blog/${params.slug}?id=${post._id}`}
            >
              <Icons.facebook className="h-5 w-5" />
              <span className="sr-only">Share on Facebook</span>
            </ShareButton>
            <ShareButton
              network="linkedin"
              url={`https://mide.codes/blog/${params.slug}?id=${post._id}`}
              title={post.title}
            >
              {" "}
              <Icons.linkedin className="h-5 w-5" />
              <span className="sr-only">Share on LinkedIn</span>
            </ShareButton>
            <ShareButton
              network="whatsapp"
              url={`https://mide.codes/blog/${params.slug}?id=${post._id}`}
              title={post.title}
            >
              <Icons.whatsapp className="h-5 w-5" />
              <span className="sr-only">Share on WhatsApp</span>
            </ShareButton>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
