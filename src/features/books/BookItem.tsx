import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
}

interface BookItemProps {
  book: Book;
}

export const BookItem: React.FC<BookItemProps> = ({ book }) => (
  <TableRow>
    <TableCell>{book.title}</TableCell>
    <TableCell>{book.author}</TableCell>
    <TableCell>{book.year}</TableCell>
  </TableRow>
);
