import { CalculatorIcon, LucideIcon, ScanTextIcon, TypeIcon, WandIcon } from "lucide-react";
import { IconType } from "react-icons";
import { FaBrain } from "react-icons/fa";
import { MdTextFields } from "react-icons/md";

export const FEATURES_ZH = [
  {
    title: "AI智能解题",
    content: "支持文字和图片题目，自动生成详细解题步骤和标准答案，准确率超过95%。",
    icon: FaBrain,
  },
  {
    title: "OCR文字识别",
    content: "智能识别图片中的文字和数学公式，准确率高达99%，支持手写体识别。",
    icon: ScanTextIcon,
  },
  {
    title: "数学公式渲染",
    content: "批量渲染数学公式，支持复制编辑，竖式计算自动生成，格式标准规范。",
    icon: CalculatorIcon,
  },
  {
    title: "整页自动切割",
    content: "教辅内容录入时自动识别和分割题目，提升录入效率，支持批量处理。",
    icon: WandIcon,
  },
  {
    title: "智能补全",
    content: "参考题目智能补全，减少重复录入工作，提高工作效率。",
    icon: TypeIcon,
  },
  {
    title: "文本优化",
    content: "智能字体和标点符号优化，确保内容格式规范，提升专业度。",
    icon: MdTextFields,
  },
];

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    content: string;
    icon: IconType | LucideIcon | string;
  }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_ZH,
}