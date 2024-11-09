import { usePathname } from "next/navigation";
import Button from "./Button";
import { ArrowRight, LogoIcon, ToggleIcon } from "./Icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = ({ toggleMenu }: { toggleMenu: () => void }) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        pathname === "/"
          ? "md:absolute md:top-5 z-50 bg-transparent"
          : "fixed z-50 dark:bg-black bg-transparent",
        "w-full flex justify-center items-center  lg:px-10 px-5 pt-5 md:pt-0"
      )}
    >
      <div className="w-full  flex flex-col gap-y-[27px]">
        <div className="w-full flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-[8px]">
              <div className="dark:bg-white bg-black lg:h-[35px] lg:w-[35px] w-[28px] h-[28px] flex justify-center items-center rounded-[3px]">
                <LogoIcon className="fill-white dark:fill-black" />
              </div>
              <p className="font-sans lg:text-[20px] text-[16px] ">
                <span className="text-[#A0A5AE]">Mide</span>
                <span className="text-black dark:text-white">codes</span>
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-x-[9px]">
            <Link href="/contact">
              <Button className="font-sans flex justify-center items-center gap-3 lg:gap-6 w-[137px] h-[41px] dark:!border-white dark:!text-white lg:dark:!border-black lg:dark:!text-black">
                Let’s Talk{" "}
                <ArrowRight className="stroke-black dark:stroke-white lg:dark:stroke-black" />
              </Button>
            </Link>
            <Button
              onClick={toggleMenu}
              className="font-sans flex justify-center items-center gap-6 border-none lg:w-fit h-[41.215px]  w-[51px]"
            >
              <ToggleIcon className="fill-white dr stroke-black " />
            </Button>
          </div>
        </div>
        <div className="h-[0.5px] bg-[#6A6A6A] w-full"></div>
      </div>
    </div>
  );
};

export default Header;
