import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const locales = ["zh", "zh-CN", "zh-TW", "zh-HK"];
export const localeNames: any = {
  zh: "🇨🇳 中文",
};
export const defaultLocale = "zh";

// If you wish to automatically redirect users to a URL that matches their browser's language setting,
// you can use the `getLocale` to get the browser's language.
export function getLocale(headers: any): string {
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

const dictionaries: any = {
  zh: () => import("@/locales/zh.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
    locale = "zh";
  }

  // 如果不是支持的语言，默认使用中文
  if (!Object.keys(dictionaries).includes(locale)) {
    locale = "zh";
  }

  return dictionaries[locale]();
};
