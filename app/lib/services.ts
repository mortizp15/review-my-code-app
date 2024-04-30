
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

export async function getRepoContent(username: string, repo: string) {
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}/contents`);
    const content = await response.json();
    return content;
}