import Link from "next/link";

export default function ExploreButton() {
  return (
    <Link
      href={"/destination"}
      className="aspect-square w-[150px] md:w-[242px] lg:w-[274px] flex relative"
    >
      <div className="text-dark-blue bg-white rounded-full tracking-[1.25px] font-bellefair text-[20px] md:text-[32px] uppercase w-full h-full z-20 flex justify-center items-center pointer-events-none">
        <h2>Explore</h2>
      </div>
      <div className="absolute inset-0 bg-white rounded-full opacity-10 hover:scale-150 transition-all" />
    </Link>
  );
}
