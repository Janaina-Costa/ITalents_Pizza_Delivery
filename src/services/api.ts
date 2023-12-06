import axios from 'axios';

import { API_URL } from '../settings';

export const api = axios.create({
  baseURL: `${API_URL}`,
});
