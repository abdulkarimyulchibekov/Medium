import Box from '@mui/material/Box';
import { Button, Typography, Modal, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useListsStore } from '../../Data/ListsStore';
import { IList } from '../../Data/Interfaces';
import { useNavigate } from 'react-router-dom';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 800,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

interface IProps {
	open: boolean;
	setOpen: Function;
	list: IList;
}

export const DeleteModal = ({ open, setOpen, list }: IProps) => {
	const handleClose = () => setOpen(false);
	const navigate = useNavigate();
	const listDelete = useListsStore((state: any) => state.deleteListsStore);
	const lists = useListsStore((state: any) => state.listsStore);
	const handleSubmit = () => {
		const data = lists.filter((e: IList) => e !== list);
		listDelete(data);
		navigate('/saved');
		handleClose();
	};
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<IconButton
						style={{ display: 'block', marginLeft: 'auto' }}
						onClick={handleClose}>
						<ClearIcon />
					</IconButton>
					<Box style={{ display: 'block', marginTop: 100, marginBottom: 130 }}>
						<Typography fontWeight={900} textAlign={'center'} variant='h3'>
							Delete List
						</Typography>
						<Typography
							marginTop={2}
							marginBottom={2}
							color={'gray'}
							textAlign={'center'}
							variant='subtitle1'>
							Deleting this list will not delete the stories in it.
						</Typography>
						<Box style={{ display: 'block', textAlign: 'center' }}>
							<Button
								style={{
									color: 'gray',
									borderColor: 'gray',
									marginRight: 5,
									borderRadius: 18,
								}}
								onClick={handleClose}
								variant='outlined'>
								Cancel
							</Button>
							<Button
								style={{
									color: 'white',
									background: '#C94A4A',
									marginRight: 5,
									borderRadius: 18,
								}}
								variant='contained'
								onClick={handleSubmit}>
								Delete
							</Button>
						</Box>
					</Box>
				</Box>
			</Modal>
		</div>
	);
};
