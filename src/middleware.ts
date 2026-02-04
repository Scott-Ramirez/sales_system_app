import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Por ahora no hacemos nada, solo dejamos pasar
  return NextResponse.next();
}

// Opcional: limitar rutas que usan middleware
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
