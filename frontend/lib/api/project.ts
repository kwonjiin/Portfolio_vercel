export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  role: string;
  stack: string[];
  features: string[];
  contributions: string[];
  experience: string[];
}

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch("https://www.kwonjiminportfolio.com/api", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("프로젝트 데이터를 불러오지 못했습니다.");
  }

  return res.json();
}
