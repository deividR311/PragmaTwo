import axios, { AxiosInstance } from 'axios';
import { REACT_APP_API, REACT_APP_API_KEY } from 'react-native-dotenv';

class BaseService {
  CATS_API : AxiosInstance;

  constructor() {
    this.CATS_API = axios.create({
      baseURL: `${REACT_APP_API}`,
      timeout: 15000,
      headers: {
        'Content-type': 'application/json',
        'x-api-key'   : REACT_APP_API_KEY
      }
    });
  }
}

export default BaseService;