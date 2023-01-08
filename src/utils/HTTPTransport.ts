type BufferSource = ArrayBufferView | ArrayBuffer;
type XMLHttpRequestBodyInit = string | Blob | BufferSource | FormData | URLSearchParams;

enum METHOD {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

type Options = {
    method: METHOD;
    data?: Document | XMLHttpRequestBodyInit | null | undefined;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

class HTTPTransport {
  static get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return HTTPTransport.request(url, { ...options, method: METHOD.GET });
  }

  static request(url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> {
    const { method, data } = options;

    const dataForQuery = data as Record<string, any>;

    const queryStr = dataForQuery.entries().map(
      ([key, value]: [string, any]) => `${key}=${value}`,
    ).join('&');
    const query = method === METHOD.GET && dataForQuery ? `?${queryStr}` : '';

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url + query);

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}

export default HTTPTransport;
