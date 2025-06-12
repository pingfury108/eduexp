import { Tier, TiersEnum } from "@/types/pricing";

export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "普通版",
    price: "￥2/天",
    href: "https://mall.pingfury.top/bedu/",
    description: "基础功能版本，适合日常使用，按天计费灵活方便。",
    features: [
      "AI智能解题",
      "OCR文字识别",
      "数学公式渲染",
      "基础答题功能",
      "客服技术支持",
      "按天灵活付费",
    ],
    buttonText: "立即使用",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Premium,
    title: "扣子版",
    href: "https://doc-edu.pingfury.top/coze",
    description: "基于扣子平台的API版本，适合开发者和企业用户集成使用。",
    price: "￥480",
    features: [
      "API接口调用",
      "无限制使用",
      "企业级稳定性",
      "开发者文档",
      "技术支持服务",
      "灵活集成方案",
    ],
    buttonText: "了解详情",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_ZH
}