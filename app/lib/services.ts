import { arch } from "os";

export async function getRepos(username: string) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
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


  export async function getContenidoRepo(owner: string, nombreRepo: string) {
    try {
      // Obtener el SHA (hash) del árbol de contenido del repositorio
      const response = await fetch(`https://api.github.com/repos/${owner}/${nombreRepo}/branches/main`);
      if(!response.ok) {
        throw new Error(`Error al fetchear la API: ${response.statusText}`);
      }
      const { commit } = await response.json();
      const SHA =  commit.sha;

      // Obtener el contenido del repositorio
      if(SHA) {
        const response = await fetch(`https://api.github.com/repos/${owner}/${nombreRepo}/git/trees/${SHA}?recursive=1`);
        if(!response.ok) {
          throw new Error(`Error al fetchear la API: ${response.statusText}`);
        }
        const contenido = await response.json();
        return contenido;
      } else {
        throw new Error("No se pudo obtener el SHA del arbol de contenido del repositorio");
      }

    } catch(error) {
      console.error("Error al obtener el contenido del repositorio", error);
      throw error;
    }
  }

  export async function getContenidoArchivo(owner: string, nombreRepo: string, archivoSha: string) {
    try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${nombreRepo}/git/blobs/${archivoSha}`);
      if(!response.ok) {
        throw new Error(`Error al fetchear la API: ${response.statusText}`);
      }
      const contenido = await response.json();
      return contenido;
    } catch(error) {
      console.error("Error al obtener el contenido del archivo", error);
      throw error;
    }
  }