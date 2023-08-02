"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  function linkStyles(href: string): string {
    if (pathname == href) {
      return "text-white transition-colors ";
    }
    return "hover:[color:#003a15] transition-colors ";
  }
  return (
    <nav className="sticky top-0 bg-black  ">
      <div className="z-50 text-white text-opacity-50  h-12 flex justify-end items-center gap-4 px-4 rounded-sm [background:#467152] text-sm font-bold">
        <Link href={"/"} className={linkStyles("/")}>
          To-Do
        </Link>
        <Link href={"/create"} className={linkStyles("/create")}>
          Create To-Do
        </Link>
        <Link href={"/test"} className={linkStyles("/create")}>
          Testing
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
