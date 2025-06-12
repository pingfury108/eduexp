import { ALL_FEATURES } from "@/config/feature";
import React from "react";

const Feature = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const FEATURES = ALL_FEATURES[`FEATURES_${langName.toUpperCase()}`];
  return (
    <section
      id={id}
      className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto pt-16 pb-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-center text-3xl font-bold mb-4 relative">
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            {locale.title}
          </span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 rounded-full"></div>
        </h2>
        {locale.subtitle && (
          <h3 className="text-xl text-gray-700 dark:text-gray-300 mb-2">{locale.subtitle}</h3>
        )}
        {locale.description && (
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{locale.description}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES?.map((feature, index) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:bg-gray-100/80 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
          >
            <div className="p-4 w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20">
              {feature.icon && typeof feature.icon === "string" ? (
                <span className="text-2xl text-gray-700 dark:text-white">{feature.icon}</span>
              ) : (
                React.createElement(feature.icon, { className: "text-2xl text-blue-500 dark:text-blue-400" })
              )}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
            <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
              {feature.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
