async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export default apiFetch;
