import { useRef } from 'react';
import Box from '@mui/material/Box';
import {
	IconButton,
	Typography,
	TextField,
	Checkbox,
	FormControlLabel,
	Stack,
	Button,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { useListsStore } from '../../Data/ListsStore';
import { IData } from '../../Data/Interfaces';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 800,
	bgcolor: 'background.paper',
	border: '2px solid #ddd',
	boxShadow: 24,
	p: 4,
};

interface IProps {
	open: boolean;
	setOpen: Function;
	e?: IData | null;
}

export default function ListCreate({ open, setOpen, e }: IProps) {
	const handleClose = () => setOpen(false);

	const inputRef = useRef<any>();

	const addList = useListsStore((state: any) => state.addListsStore);

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<IconButton
						onClick={handleClose}
						style={{ marginLeft: 'auto', display: 'block' }}>
						<ClearIcon />
					</IconButton>
					<Typography
						style={{ textAlign: 'center', fontWeight: 900, marginBottom: 15 }}
						variant={'h3'}>
						Create New List
					</Typography>
					<form
						onSubmit={(evt) => {
							evt.preventDefault();
							handleClose();
							if (e) {
								const data = {
									title: inputRef?.current?.value,
									stories: [e],
								};
								addList(data);
							} else {
								const data = {
									title: inputRef?.current?.value,
									stories: [],
								};
								addList(data);
							}
						}}
						style={{ width: '100%' }}>
						<TextField
							style={{ width: '100%', marginBottom: 30 }}
							id='standard-basic'
							label='Give it a name'
							variant='standard'
							required
							onChange={() => {
								console.log(inputRef?.current?.value ? true : false);
							}}
							inputRef={inputRef}
						/>
						<FormControlLabel
							sx={{ mb: 30 }}
							control={<Checkbox />}
							label='Make it Private'
						/>
						<Stack
							direction={'row'}
							spacing={2}
							style={{
								textAlign: 'center',
								display: 'block',
							}}>
							<Button
								color='success'
								variant='outlined'
								onClick={handleClose}
								style={{ border: '2px solid green', borderRadius: '18px' }}>
								Cancel
							</Button>
							<Button
								color='success'
								variant='outlined'
								disabled={inputRef?.current?.value ? true : false}
								type={'submit'}
								style={{ border: '2px solid green', borderRadius: '18px' }}>
								Create
							</Button>
						</Stack>
					</form>
				</Box>
			</Modal>
		</div>
	);
}
