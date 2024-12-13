import Footer from "@/components/Footer";
import PostList from "@/components/PostList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts | Midecodes' Blog",
  description: "Blog posts by Sunday Olomitutu",
  manifest: "/site.webmanifest",
  keywords: [
    "Mobile developer",
    "Mobile App Developer",
    "React Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Native Developer",
    "Lagos",
    "Nigeria",
    "Africa",
    "Flutter Developer",
    "Dart Developer",
    "Javascript Developer",
    "Typescript Developer",
    "Olomitutu",
  ],
  openGraph: {
    title: "Blog Posts | Midecodes' Blog",
    description: "Read our latest blog posts on various topics.",
    type: "website",
    url: "https://mide.codes/blog",
    images: [
      {
        url: "https://mide.codes/icons/apple-touch-icon.png",
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
    images: ["https://mide.codes/icons/apple-touch-icon.png"],
  },
};

export default function BlogList() {
  return (
    <>
      <div className="container mx-auto px-4 py-12 md:pt-28 pt-24 pb-24">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Latest Blog Posts
        </h1>
        <PostList />
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
}
