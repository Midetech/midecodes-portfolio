import PostList from "@/components/PostList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts | Midecodes' Blog",
  description: "Read our latest blog posts on various topics.",
  openGraph: {
    title: "Blog Posts | Midecodes' Blog",
    description: "Read our latest blog posts on various topics.",
    type: "website",
    url: "https://mide.codes/blog",
    images: [
      {
        url: "https://res.cloudinary.com/mideveloper/image/upload/v1731019368/mide-image_rhyzgi.png",
        width: 1200,
        height: 630,
        alt: "Blog Posts | Midecodes' Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Posts | Midecodes' Blog",
    description: "Read our latest blog posts on various topics.",
    images: [
      "https://res.cloudinary.com/mideveloper/image/upload/v1731019368/mide-image_rhyzgi.png",
    ],
  },
};

export default function BlogList() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Blog Posts</h1>
      <PostList />
    </div>
  );
}
