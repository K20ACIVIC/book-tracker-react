import { useEffect, useState } from 'react';
import { Book } from '../features/books/BookItem';
import { fetchBooks } from '../services/bookService';

interface UseBooksResult {
  books: Book[];
  error: string | null;
  loading: boolean;
}

export function useBooks(query: string): UseBooksResult {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchBooks(query)
      .then((data) => {
        setBooks(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || 'Error fetching books');
        setBooks([]);
      })
      .finally(() => setLoading(false));
  }, [query]);

  return { books, error, loading };
}
