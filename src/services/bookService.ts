import axios, { AxiosResponse } from 'axios';
import { Book } from '../features/books/BookItem';

export async function fetchBooks(): Promise<AxiosResponse<Book[], any>> {
  
  const apiRoute = import.meta.env.VITE_API_ROUTE || 'http://localhost:3000/api';
  
  return axios.get<Book[]>(`${apiRoute}/books`, {});
}
