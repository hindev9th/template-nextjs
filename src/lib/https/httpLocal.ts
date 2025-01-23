import { Method } from '@/types/request';
import { Response } from '@/types/response';

// Dùng cho việc call api cùng host (api của next js)
const httpLocal = async <T>(
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
    const response = await fetch(`${url}`, requestOptions);
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
httpLocal.get = <T>(
  url: string,
  params: Record<any, any>,
  options?: RequestInit
) => {
  const paramsString = new URLSearchParams(params).toString();
  return httpLocal<T>(`${url}?${paramsString}`, Method.GET, options);
};

httpLocal.post = <T>(
  url: string,
  body?: Record<any, any>,
  options?: RequestInit
) => {
  return httpLocal<T>(url, Method.POST, {
    body: JSON.stringify(body),
    ...options,
  });
};

httpLocal.patch = <T>(
  url: string,
  body?: Record<any, any>,
  options?: RequestInit
) => {
  return httpLocal<T>(url, Method.PATCH, {
    body: JSON.stringify(body),
    ...options,
  });
};

httpLocal.put = <T>(
  url: string,
  body?: Record<any, any>,
  options?: RequestInit
) => {
  return httpLocal<T>(url, Method.PUT, {
    body: JSON.stringify(body),
    ...options,
  });
};

httpLocal.delete = <T>(url: string, options?: RequestInit) => {
  return httpLocal<T>(url, Method.DELETE, options);
};

export { httpLocal };
