import { Method } from '@/types/request';
import { Response } from '@/types/response';

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

// Convenience methods
http.get = <T>(
  url: string,
  params: Record<any, any>,
  options?: RequestInit
) => {
  const paramsString = new URLSearchParams(params).toString();
  return http<T>(`${url}?${paramsString}`, Method.GET, options);
};

http.post = <T>(
  url: string,
  body?: Record<any, any>,
  options?: RequestInit
) => {
  return http<T>(url, Method.POST, {
    body: JSON.stringify(body),
    ...options,
  });
};

http.patch = <T>(
  url: string,
  body?: Record<any, any>,
  options?: RequestInit
) => {
  return http<T>(url, Method.PATCH, {
    body: JSON.stringify(body),
    ...options,
  });
};

http.put = <T>(url: string, body?: Record<any, any>, options?: RequestInit) => {
  return http<T>(url, Method.PUT, {
    body: JSON.stringify(body),
    ...options,
  });
};

http.delete = <T>(url: string, options?: RequestInit) => {
  return http<T>(url, Method.DELETE, options);
};

export { http };
