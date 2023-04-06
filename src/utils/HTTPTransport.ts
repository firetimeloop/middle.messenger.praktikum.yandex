/* eslint-disable */
type BufferSource = ArrayBufferView | ArrayBuffer;
type XMLHttpRequestBodyInit = string | Blob | BufferSource | FormData | URLSearchParams ;

enum METHOD {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

type Options = {
    method: METHOD;
    data?: Document | XMLHttpRequestBodyInit | null | undefined | Record<string, any>;
    headers?: Record<string, string>;
    isJSON?: boolean;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

class HTTPTransport {
  private _url: string;

  constructor(url: string) {
    this._url = url;
  }

  get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this._request(url, { ...options, method: METHOD.GET });
  }

  post(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this._request(url, { ...options, method: METHOD.POST });
  }

  put(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this._request(url, { ...options, method: METHOD.PUT });
  }

  delete(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this._request(url, { ...options, method: METHOD.DELETE });
  }

  private _request(url: string, options: Options = { 
    method: METHOD.GET
  }): Promise<XMLHttpRequest> {
    const { method, data } = options;

    let headers: Record<string, string>;
    if (!(data instanceof FormData)) {
      headers = {
        'Content-Type': 'application/json; charset=utf-8',
      };
    }

    const dataForQuery = (data || {}) as Record<string, any>;

    const queryStr = Object.entries(dataForQuery).map(
      ([key, value]: [string, any]) => `${key}=${value}`,
    ).join('&');
    const query = method === METHOD.GET && dataForQuery ? `?${queryStr}` : '';

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, this._url + url + query);

      xhr.withCredentials = true;

      if (headers) {
        for (const [key, value] of Object.entries(headers)) {
          xhr.setRequestHeader(key, value);
        }
      }

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data as XMLHttpRequestBodyInit);
      }
    });
  }
}

export default new HTTPTransport('https://ya-praktikum.tech/api/v2');
