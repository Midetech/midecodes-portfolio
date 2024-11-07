"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type ShareButtonProps = {
  network: "twitter" | "facebook" | "linkedin" | "whatsapp";
  url: string;
  title?: string;
  children: ReactNode;
};

export default function ShareButton({
  network,
  url,
  title,
  children,
}: ShareButtonProps) {
  const handleShare = () => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = title ? encodeURIComponent(title) : "";

    let shareUrl = "";

    switch (network) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
        break;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Button variant="outline" size="icon" onClick={handleShare}>
      {children}
    </Button>
  );
}
