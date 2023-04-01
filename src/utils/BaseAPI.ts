/* eslint-disable */
abstract class BaseAPI {
  create(_data: any):Promise<XMLHttpRequest> { throw new Error('Not implemented'); }

  request() { throw new Error('Not implemented'); }

  update(_data: any):Promise<XMLHttpRequest> { throw new Error('Not implemented'); }

  delete(_data: any):Promise<XMLHttpRequest> { throw new Error('Not implemented'); }
}

export default BaseAPI;
