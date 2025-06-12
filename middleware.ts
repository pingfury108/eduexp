import { NextRequest } from "next/server";
import { locales } from "./lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 对于语言前缀路径，重定向到根路径
  const isLanguagePath = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (isLanguagePath) {
    // 移除语言前缀，重定向到根路径
    const newPathname = pathname.replace(/^\/[^/]+/, '') || '/';
    request.nextUrl.pathname = newPathname;
    return Response.redirect(request.nextUrl);
  }

  // 其他路径正常处理
  return;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|terms|.*\\.(?:txt|xml|ico|png|jpg|jpeg|svg|gif|webp|js|css|woff|woff2|ttf|eot)).*)'
  ]
};