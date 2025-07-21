
import { RouteObject } from 'react-router-dom';
import BookList from '../features/books/BookList';

export const routes: RouteObject[] = [
  {
    path: '/books',
    Component: BookList,
  },
];

export default routes;
