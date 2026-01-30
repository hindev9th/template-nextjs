import { Method } from '@/types/request';
import { Response } from '@/types/response';

let refreshPromise: Promise<{
  accessToken: string;
  refreshToken: string;
}> | null = null;

const http = async <T>(
  url: string,
  method: Method = Method.GET,
  options?: RequestInit
): Promise<Response<T>> => {
  const requestOptions: RequestInit = {
    method,
    ...options,
    headers: {
      ...options?.headers,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_API_URL}${url}`,
      requestOptions
    );
    const res = await response.json()
    if (res.statusCode === 401) {
      const newToken = await refreshAccessTokenOnce("access-token");
    }


    return await response.json();
  } catch (error) {
    console.error(error);
    return {
      data: null,
      message: 'Error while fetching request',
      statusCode: 500,
    } as Response<T>;
  }
};

async function refreshAccessTokenOnce(refreshToken: string) {
  // Nếu đang refresh → đợi
  if (refreshPromise) {
    return refreshPromise
  }

  refreshPromise = (async () => {
    try {
      const res = await fetch("https://api.your-backend.com/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          refreshToken: refreshToken,
        }),
      })

      const data = await res.json()

      return {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken ?? refreshToken,
      }
    } finally {
      // reset lock
      refreshPromise = null
    }
  })()

  return refreshPromise
}

// Convenience methods
http.get = <T>(
  url: string,
  params: string[][] | Record<string, string> | string | URLSearchParams = {},
  options?: RequestInit
) => {
  const paramsString = new URLSearchParams(params).toString();
  return http<T>(`${url}?${paramsString}`, Method.GET, options);
};

http.post = <T>(
  url: string,
  body?: Record<string, unknown>,
  options?: RequestInit
) => {
  return http<T>(url, Method.POST, {
    body: JSON.stringify(body),
    ...options,
  });
};

http.patch = <T>(
  url: string,
  body?: Record<string, unknown>,
  options?: RequestInit
) => {
  return http<T>(url, Method.PATCH, {
    body: JSON.stringify(body),
    ...options,
  });
};

http.put = <T>(url: string, body?: Record<string, unknown>, options?: RequestInit) => {
  return http<T>(url, Method.PUT, {
    body: JSON.stringify(body),
    ...options,
  });
};

http.delete = <T>(url: string, options?: RequestInit) => {
  return http<T>(url, Method.DELETE, options);
};

export { http };
