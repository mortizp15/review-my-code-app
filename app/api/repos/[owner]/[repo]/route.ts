import { NextResponse, NextRequest } from "next/server";


export async function GET(req: NextRequest, context: any) {

  const { owner, repo } = context.params;
  if (!owner || !repo) {
    return NextResponse.error();
  }

  try {
    const branchResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/branches/main`);

    if (!branchResponse.ok) {
      throw new Error(`Error al fetchear la API: ${branchResponse.statusText}`);
    }

    const { commit } = await branchResponse.json();
    const SHA = commit.sha;

    // Obtener el contenido del repositorio
    const treeResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/${SHA}?recursive=1`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (!treeResponse.ok) {
      throw new Error(`Error al fetchear la API: ${treeResponse.statusText}`);
    }

    const content = await treeResponse.json();
    return NextResponse.json(content)
  } catch (error) {
    console.error('Error al obtener el contenido del repositrio', error);
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
