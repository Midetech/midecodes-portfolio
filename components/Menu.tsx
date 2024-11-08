import { X } from "lucide-react";
import Button from "./Button";
import { GitHub, LinkedIn, XIcon } from "./Icons";
import Link from "next/link";

const Menu = ({
  toggleMenu,
  openMenu,
}: {
  toggleMenu: () => void;
  openMenu: boolean;
}) => {
  const links = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Blog",
      url: "/blog",
    },
    {
      id: 3,
      name: "Projects",
      url: "/projects",
    },
    {
      id: 4,
      name: "Contact",
      url: "/contact",
    },
  ];

  if (!openMenu) return null;
  return (
    <div className="md:w-[657px] w-full md:h-[1058px] h-screen dark:bg-black bg-white dark:tex absolute top-0 right-0 z-50 shadow-md p-[45px] flex flex-col">
      <div className="flex justify-end">
        <Button
          onClick={toggleMenu}
          className="font-sans flex justify-center items-center gap-6 border  h-[47px]  !w-[65px] "
        >
          <X className="dark:text-white text-black h-5 w-5" />
        </Button>
      </div>
      <div className="flex flex-col gap-y-4 h-full">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="text-[#888888] font-sans text-[20px]"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex flex-col">
        <p className="text-black dark:text-white font-sans font-bold text-[16px] pb-2">
          Connect with me
        </p>
        <div className="flex items-center gap-4 mt-2">
          <Link href={"https://github.com/midetech"}>
            <div className="w-[34px] h-[34px] p-[2px] rounded-full flex justify-center items-center">
              <GitHub />
            </div>
          </Link>
          <Link href={"https://www.linkedin.com/in/developermide/"}>
            <div className="w-[34px] h-[34px]  p-[2px] rounded-full flex justify-center items-center">
              <LinkedIn />
            </div>
          </Link>
          <Link href={"https://twitter.com/midecodeable"}>
            <div className="w-[34px] h-[34px]  p-[2px] rounded-full flex justify-center items-center">
              <XIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
