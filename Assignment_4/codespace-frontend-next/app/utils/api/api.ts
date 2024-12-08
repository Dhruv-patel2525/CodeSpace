import { redirect } from "next/navigation";
import { getAccessToken, clearTokens } from "../TokenUtils";

export const fetchWithAuth = async (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  const headers = new Headers(options.headers || {});
  const token = getAccessToken();

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const config: RequestInit = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, config);

    // Handle 401 Unauthorized by clearing tokens and redirecting
    if (response.status === 401) {
      console.warn("Unauthorized. Clearing tokens and redirecting to login.");
      clearTokens();
      redirect("/login");
    }

    // Handle general HTTP errors
    if (!response.ok) {
      console.error(
        `HTTP error! Status: ${response.status} - ${response.statusText}`
      );
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error("Error in fetchWithAuth:", error);
    throw error; // Propagate the error for higher-level handling
  }
};
