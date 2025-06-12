import WebsiteCard from "@/components/WebsiteCard";
import { LOGOS } from "@/config/logos";
import { showcases } from "@/config/showcases";
import { createModernMetaScraper, ModernMetaScraper } from "@/lib/metaScraper";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

const scraper: ModernMetaScraper = createModernMetaScraper();

const Showcase = async ({ id, locale }: { id: string; locale: any }) => {
  const sites = await scraper.scrapeMultiple(showcases);

  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-7xl items-center pt-16"
    >
      <div className="flex flex-col text-center max-w-xl gap-4">
        <h2 className="text-center text-white">
          <RoughNotation
            type="highlight"
            show={true}
            color="#ea580c"
            animationDelay={600}
          >
            {locale.title}
          </RoughNotation>
        </h2>
        <p className="text-large text-default-500">{locale.description}</p>
      </div>
      <Spacer y={8} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
        {sites.map((site) => (
          <WebsiteCard key={site.url} {...site} />
        ))}
      </div>
      <Spacer y={8} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {LOGOS.slice(0, 8).map((logo, index) => (
          <div key={index} className="p-4 bg-white/5 rounded-lg">
            <Image
              src={logo.image}
              alt={logo.name}
              width={60}
              height={60}
              className="mx-auto"
            />
            <p className="text-sm text-gray-400 mt-2">{logo.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
