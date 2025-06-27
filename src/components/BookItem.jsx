import { TableCell, TableRow } from "@mui/material";

export const BookItem = ({ book }) => (
	<TableRow>
		<TableCell> {book.title}</TableCell>
		<TableCell> {book.author}</TableCell>
		<TableCell> {book.year}</TableCell>
	</TableRow>
);
