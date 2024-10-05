import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Restricted Area"',
      },
    })
  }

  const [scheme, encoded] = authHeader.split(" ");
  if (scheme !== "Basic" || !encoded) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Restricted Area"',
      },
    })
  }

  const decoded = atob(encoded);
  const [user, pass] = decoded.split(":");

  if (user !== process.env.USERNAME_ADMIN || pass !== process.env.PASSWORD_ADMIN) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Restricted Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin',
};