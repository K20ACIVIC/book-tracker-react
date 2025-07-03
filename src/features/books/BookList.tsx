import { BookItem } from './BookItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useBooks } from '../../hooks/useBooks';

const BookList: React.FC = () => {
	const { books, error, loading } = useBooks('harry potter');

	return (
		<div className="p-4">
			<h2>Book List</h2>
			<div></div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }}>
					<TableHead>
						<TableRow>
							<TableCell>Title</TableCell>
							<TableCell>Author</TableCell>
							<TableCell>Year</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{books && books.length > 0 ? (
							books.map((book: any) => (
								<BookItem
									key={book.id}
									book={book}
								/>
							))
						) : (
							<TableRow>
								<TableCell colSpan={3}>
									No books found.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default BookList;
