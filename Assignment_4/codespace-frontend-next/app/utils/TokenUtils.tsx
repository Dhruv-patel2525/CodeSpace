// utils/tokenUtils.ts

import { use } from "react";

export const setTokens = (accessToken: string) => {
    localStorage.setItem('accessToken', accessToken);
  };
  
  export const getAccessToken = (): string | null => localStorage.getItem('accessToken');
  
  export const getRefreshToken = (): string | null => localStorage.getItem('refreshToken');
  export const getUser=():string | null=>localStorage.getItem('user');
  
  export const clearTokens = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  };
  