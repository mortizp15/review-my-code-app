import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, context: any) {
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
