export const fetchWithAuth = async (url: string, options: RequestInit = {}, token?: string): Promise<Response> => {
    const headers = new Headers(options.headers || {});
  
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  
    return fetch(url, {
      ...options,
      headers,
    });
  };
  