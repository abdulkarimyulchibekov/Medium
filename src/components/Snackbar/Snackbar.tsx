import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
	open: boolean;
	setOpen: Function;
	message: string;
}

export default function SimpleSnackbar({ open, setOpen, message }: IProps) {
	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: string,
	) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const action = (
		<React.Fragment>
			<IconButton
				size='small'
				aria-label='close'
				color='inherit'
				onClick={handleClose}>
				<CloseIcon fontSize='small' />
			</IconButton>
		</React.Fragment>
	);

	return (
		<div>
			<Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
				message={message}
				action={action}
			/>
		</div>
	);
}
