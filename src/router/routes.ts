
import { RouteObject } from 'react-router-dom';
import BookList from '../features/books/BookList';

const routes: RouteObject[] = [
  {
    path: '/',
    element: BookList as unknown as React.ReactNode,
  },
];

export default routes;
