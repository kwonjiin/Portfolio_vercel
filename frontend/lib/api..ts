const BASE_URL = "http://localhost:8080/api";

export async function fetchProjects() {
  const res = await fetch(`${BASE_URL}/projects`, { cache: "no-store" });
  const json = await res.json();
  return json.data;
}

export async function fetchProfile() {
  const res = await fetch(`${BASE_URL}/profile`, { cache: "no-store" });
  const json = await res.json();
  return json.data;
}

export async function sendContact(data: {
  name: string;
  email: string;
  message: string;
}) {
  const res = await fetch(`${BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.ok;
}
