import axios from 'axios';
import { MAIN_URL } from './Network';

export const HTTP = axios.create({
  baseURL: MAIN_URL + 'api/v1/',
});
