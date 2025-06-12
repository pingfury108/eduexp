import HomeIndex from "@/components/home/HomeIndex";

export default async function Home() {
  // 直接使用中文，无需语言参数
  return <HomeIndex lang="zh" />;
}
