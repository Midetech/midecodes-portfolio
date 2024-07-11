import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "angular",
  "flutter",
  "android",
  "html5",
  "css3",
  "nextdotjs",
  "amazonaws",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full lg:max-w-full max-w-[32rem] items-center justify-center overflow-hidden border-t border-b border bg-background px-20 pb-20 pt-8 mb-10">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
