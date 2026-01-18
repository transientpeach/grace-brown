import Image from "next/image";
import HomeMdx from "@/content/home.mdx";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 sm:items-start sm:flex-row">
      <div className="flex-1">
        <HomeMdx />
      </div>
      <div className="flex self-start md:self-auto">
        <div className="h-64 w-64 overflow-hidden not-prose">
          <Image
            src="/images/photobooth-cropped.png"
            alt="grace brown photobooth"
            height={256}
            width={256}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
