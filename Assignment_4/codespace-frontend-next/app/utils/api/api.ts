// export const fetchWithAuth = async (url: string, options: RequestInit = {}, token?: string): Promise<Response> => {
//     const headers = new Headers(options.headers || {});

import { redirect } from "next/navigation";
import { getAccessToken, getRefreshToken, setTokens, clearTokens }  from "../TokenUtils";

//     if (token) {
//       headers.set("Authorization", `Bearer ${token}`);
//     }
  
//     return fetch(url, {
//       ...options,
//       headers,
//     });
//   };
// import { getAccessToken, getRefreshToken, setTokens, clearTokens } from './tokenUtils';

export const fetchWithAuth = async (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  const headers = new Headers(options.headers || {});
  let token = getAccessToken();

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const config: RequestInit = {
    ...options,
    headers,
  };

  let response = await fetch(url, config);

  // Handle token expiration (401 Unauthorized)
  if (response.status === 401) {
    redirect('/login');
  }

  return response;
};

  