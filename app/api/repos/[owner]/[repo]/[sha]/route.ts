import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, context: any) {
  const { owner, repo, sha } = context.params;
  if (
    typeof owner !== "string" ||
    typeof repo !== "string" ||
    typeof sha !== "string"
  ) {
    return NextResponse.error();
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/git/blobs/${sha}`
    );

    if (!response.ok) {
      throw new Error(`Error al fetchear la API: ${response.statusText}`);
    }

    const content = await response.json();
    return NextResponse.json(content);
  } catch (error) {
    console.error("Error al obtener el contenido del archivo", error);
    return NextResponse.error();
  }
}
