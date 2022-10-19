import { IData } from '../../Data/Interfaces';
import { Link } from 'react-router-dom';
import { ListItem, Stack, Typography, IconButton, Box } from '@mui/material';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { useSavedStore } from '../../Data/SavedStore';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SimpleSnackbar from '../Snackbar/Snackbar';
import { useState } from 'react';

interface IProps {
	e: IData;
	list: IData[];
}

export const SavedItem = ({ e, list }: IProps) => {
	const addSaved = useSavedStore((state: any) => state.addSaved);
	const deleteSaved = useSavedStore((state: any) => state.deleteSaved);
	const saved = useSavedStore((state: any) => state.saved);
	const handleAdd = (item: IData) => {
		addSaved(item);
		setOpen(true);
	};
	const [open, setOpen] = useState(false);
	return (
		<ListItem className='item' style={{}}>
			<Link className='item__link' to={`/${e.id.toString()}`}>
				<Stack className='item__main' direction={'column'} spacing={2}>
					<Stack className='item__header' direction={'row'} spacing={1}>
						<img
							className='item__img'
							width={24}
							height={24}
							src={`https://picsum.photos/id/${e.id * 10}/72`}
							alt='photo of user'
						/>
						<span className='item__name'>{e.name}</span>
						<span className='item__date'>{e.date}</span>
					</Stack>
					<Stack alignItems={'center'} direction={'row'}>
						<Box>
							<Typography className='item__title' variant='h4'>
								{e.title}
							</Typography>
							<Typography className='item__content'>
								{e.first_content[1]}
							</Typography>
						</Box>
						<img width={112} height={112} src={e.image1} alt={e.title} />
					</Stack>
				</Stack>
			</Link>
			<Stack
				alignItems={'center'}
				style={{
					marginBottom: 20,
					justifyContent: 'space-between',
					width: '100%',
				}}
				justifyContent={'space-between'}
				spacing={2}
				direction={'row'}>
				<Stack spacing={2} direction={'row'} alignItems={'center'}>
					<button className='item__btn'>{e.topic}</button>
					<span className='item__read'>{e.read}</span>
					<span className='item__read'>
						{e.id % 2 === 0 ? 'Selected for you' : 'Popular on medium'}
					</span>
				</Stack>
				<Stack direction={'row'} spacing={0} alignItems={'center'}>
					{/* <IconButton onClick={() => handleAdd(e)}>
						<BookmarkAddOutlinedIcon />
					</IconButton> */}
					<IconButton>
						<RemoveCircleOutlineOutlinedIcon />
					</IconButton>
					<IconButton
						onClick={() => {
							let arr = saved.filter((el: IData) => el.id != e.id);
							deleteSaved(arr);
							setOpen(true);
						}}>
						<DeleteOutlinedIcon />
					</IconButton>
				</Stack>
			</Stack>
			<SimpleSnackbar
				open={open}
				setOpen={setOpen}
				message='Deleted Successfully !!!'
			/>
		</ListItem>
	);
};
