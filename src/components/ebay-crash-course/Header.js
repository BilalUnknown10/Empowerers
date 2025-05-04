import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="font_inter py-7  bg-[#626666]">
      <div className="flex justify-between items-center mx-5 sm:mx-10 lg:mx-16">
        {/* Logo Section */}
        <div className="h-auto max-w-[150px] sm:max-w-[200px]">
          <Link href="/">
            <Image
              alt="Hero image"
              src={"/empowerer_logo_re_bg.png"}
              className="" // Smaller height on mobile
              width={700}
              height={150}
              priority
            />
          </Link>
        </div>

        {/* Button Section */}
        <div className="hidden md:flex list-none justify-center items-center flex-wrap gap-5 md:font-semibold">
          <Link
            href="/"
            className="bg-[#29ab87] text-white px-6 py-2 rounded border border-transparent hover:text-[#29ab87] hover:bg-transparent hover:border-[#29ab87] transition"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile version of "Join Now" button */}
        <div className="md:hidden flex items-center">
          <Link
            href="/"
            className="bg-[#29ab87] text-white px-4 py-2 rounded border border-transparent hover:text-[#29ab87] hover:bg-transparent hover:border-[#29ab87] transition"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
}
