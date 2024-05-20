export async function getRepos(username: string) {
  try {
    const response = await fetch(`https://reviewmycode.org/api/${username}`);
    if (!response.ok) {
      throw new Error(`Error al fetchear la API: ${response.statusText}`);
    }
    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error("Error al obtener los repositorios", error);
    throw error;
  }
}

export async function getContenidoRepo(owner: string, repo: string) {
  try {
    const response = await fetch(`https://reviewmycode.org/api/repos/${owner}/${repo}`);
    if (!response.ok) {
      throw new Error(`Error al fetchear la API: ${response.statusText}`);
    }
    const contenido = await response.json();
    return contenido;
  } catch (error) {
    console.error("Error al obtener el contenido del repositorio", error);
    throw error;
  }
}

export async function getContenidoArchivo(
  owner: string,
  repo: string,
  sha: string
) {
  try {
    const response = await fetch(
      `https://reviewmycode.org/api/repos/${owner}/${repo}/${sha}`
    );

    if (!response.ok) {
      throw new Error(`Error al fetchear la API: ${response.statusText}`);
    }
    
    const contenido = await response.json();
    return contenido;
  } catch (error) {
    console.error("Error al obtener el contenido del archivo", error);
    throw error;
  }
}
