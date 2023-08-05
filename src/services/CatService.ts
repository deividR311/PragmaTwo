import { Cat } from '../models/Cat';
import BaseService from './BaseService';

class CatsService extends BaseService {
  constructor() {
    super();
  }

  getCats = async () => {
    let response = await this.CATS_API.get<Cat[]>(``);
    return response.data;
  };

  getCatById = async ( catId : string ) => {
    let response = await this.CATS_API.get<Cat>(`/${catId}`);
    return response.data;
  };
}

const catsService = new CatsService();

export default catsService;