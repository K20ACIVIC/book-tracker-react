import { createBrowserRouter, redirect } from 'react-router-dom';
import BookList from '../components/BookList';

const books = [
	{ id: 1, title: '1984', author: 'George Orwell', year: 1949 },
	{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
	{
		id: 3,
		title: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald',
		year: 1925,
	},
];

export const router = createBrowserRouter([
	{
		path: '/',
		loader: () => redirect('/books'),
	},
	{
		path: '/books',
		element: <BookList books={books} />,
	},
]);

export default router;
