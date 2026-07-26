export async function getProjects() {
  const response = await fetch("http://localhost:3001/projects");

  const data = await response.json();

  return data;
}

export async function createProject(project) {
  const response = await fetch("http://localhost:3001/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });

  return await response.json();
}
