import { Book } from '../features/books/BookItem';

export async function fetchBooks(query: string): Promise<Book[]> {
  // Replace with real API call
  return [
    { id: '1', title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', year: 1997 },
    { id: '2', title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling', year: 1998 },
  ];
}
