import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path.startsWith('/admin')) {
    const token = request.cookies.get('admin_session');
    if (!token) {
      return NextResponse.redirect(new URL('/contact', request.url)); // Redirect unauthorized
    }
  }
}