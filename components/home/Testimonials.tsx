"use client";

/* eslint-disable react/no-unescaped-entities */
import { RoughNotation } from "react-rough-notation";

const Testimonials = ({ id, locale }: { id: string; locale: any }) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-4xl items-center py-16 gap-12"
    >
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center text-gray-900 dark:text-white">
          <RoughNotation
            type="highlight"
            show={true}
            color="#a855f7"
            animationDelay={500}
          >
            {locale.title}
          </RoughNotation>
        </h2>
        <p className="text-large text-gray-600 dark:text-gray-400 max-w-lg">
          {locale.description1} {locale.description2} {locale.description3}
        </p>
      </div>
      <div className="mx-auto w-full px-4 text-center">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-gray-50/80 dark:bg-white/5 rounded-lg border border-gray-200/50 dark:border-white/10 hover:bg-gray-100/80 dark:hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-md">
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                "这个AI助手真的很好用，大大提高了我的答题效率！"
              </p>
              <div className="text-blue-600 dark:text-blue-400 font-medium">— 百度教育用户</div>
            </div>
            <div className="p-6 bg-gray-50/80 dark:bg-white/5 rounded-lg border border-gray-200/50 dark:border-white/10 hover:bg-gray-100/80 dark:hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-md">
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                "OCR识别很准确，数学公式渲染效果也很棒。"
              </p>
              <div className="text-blue-600 dark:text-blue-400 font-medium">— 教育工作者</div>
            </div>
            <div className="p-6 bg-gray-50/80 dark:bg-white/5 rounded-lg border border-gray-200/50 dark:border-white/10 hover:bg-gray-100/80 dark:hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-md">
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                "免费开源的插件，功能却很强大，推荐！"
              </p>
              <div className="text-blue-600 dark:text-blue-400 font-medium">— 开发者</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
