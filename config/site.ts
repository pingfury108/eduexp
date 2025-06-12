import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const OPEN_SOURCE_URL = 'https://github.com/pingfury108/edu-exp'

const baseSiteConfig = {
  name: "百度教育AI助手",
  description:
    "专为百度教育兼职平台设计的智能AI助手，提供各学段学科题目智能解答、OCR识别、公式渲染等强大功能，大幅提升答题效率。",
  url: "http://edu-exp.pingfury.top",
  ogImage: "http://edu-exp.pingfury.top/og.png",
  metadataBase: '/',
  keywords: ["百度教育", "AI助手", "数学答题", "浏览器插件", "OCR识别", "公式渲染", "智能解题", "拍照解题"],
  authors: [
    {
      name: "pingfury",
      url: "https://github.com/pingfury108",
      wechat: 'qzz18580256051',
    }
  ],
  creator: 'qzz18580256051',
  openSourceURL: 'https://github.com/pingfury108/edu-exp',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
    { name: 'wechat', href: "qzz18580256051", icon: BsWechat }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:pingfury@outlook.com", icon: MdEmail },
    { name: 'wechat', href: "qzz18580256051", icon: BsWechat },
    { name: 'github', href: "https://github.com/pingfury108/", icon: BsGithub }
  ],
  footerProducts: [
    { url: 'https://github.com/pingfury108/edu-exp', name: '百度教育AI助手' },
    { url: 'https://doc-edu.pingfury.top/install', name: '插件下载' },
    { url: 'https://doc-edu.pingfury.top/guide', name: '使用文档' },
    { url: 'https://github.com/pingfury108/edu-exp/issues', name: '反馈问题' },
    { url: 'https://doc-edu.pingfury.top/coze', name: '扣子版本API' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
