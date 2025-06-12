"use client";
import { LOGOS } from "@/config/logos";
import { useTheme } from "next-themes";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ScrollingLogos = () => {
  const { theme } = useTheme();
  return (
    <section className="mx-auto w-full md:max-w-5xl lg:max-w-7xl px-0 md:px-6 lg:px-8 pt-16 pb-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          产品功能展示
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          实际使用截图，展示百度教育AI助手的强大功能
        </p>
      </div>
      <div className="overflow-hidden">
        <Marquee direction="left" autoFill pauseOnHover speed={30} gradient={false}>
          {LOGOS.map((image, index) => (
            <div className="mx-4 text-gray-500 group" key={index}>
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={image.image}
                  alt={image.name}
                  width={200}
                  height={120}
                  style={{
                    objectFit: "cover",
                  }}
                  className="hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                  <div className="w-full p-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
                    {image.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ScrollingLogos;
