import { NextApiRequest } from 'next';
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, context: any) {
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