import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  if (req.method === 'OPTIONS') {
    return OPTIONS(req);
  }

  const { username } = context.params;
  if (typeof username !== 'string') {
    return NextResponse.error();
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);

    if (!response.ok) {
      throw new Error(`Error al fetchear la API: ${response.statusText}`);
    }

    const repos = await response.json();
    return NextResponse.json(repos);
  } catch (error) {
    console.error('Error al fetchear los repositorios', error);
    return NextResponse.error();
  }
};

export async function OPTIONS(request: Request) {
  const allowedOrigin = request.headers.get("origin");
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin || "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
      "Access-Control-Max-Age": "86400",
    },
  });

  return response;
}