import { useEffect, useState } from 'react';
import { Book } from '../features/books/BookItem';
import { fetchBooks } from '../services/bookService';

interface UseBooksResult {
  books: Book[];
  error: string | null;
  loading: boolean;
}

export function useBooks(): UseBooksResult {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchBooks()
      .then((data) => {
        
        const books = data.data || [];
        setBooks(books);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || 'Error fetching books');
        setBooks([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return { books, error, loading };
}
